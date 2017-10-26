package com.dreamteam.api.service.car.impl;

import com.dreamteam.api.dao.car.CarPhotoDAO;
import com.dreamteam.api.model.bo.car.Car;
import com.dreamteam.api.model.bo.car.CarPhoto;
import com.dreamteam.api.service.car.CarPhotoService;
import com.dreamteam.api.service.car.CarService;
import com.dreamteam.api.service.file.FileService;
import com.dreamteam.api.service.impl.GenericServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

/**
 * Created by JKowalczyk on 2017-10-24.
 */
@Service
public class CarPhotoServiceImpl extends GenericServiceImpl<CarPhoto> implements CarPhotoService {

    private static final String RESIZED_PREFIX = "RESIZED";

    private FileService fileService;
    private CarService carService;

    @Value("${s3-repo-bucket-komis-images}")
    private String s3KomisImagesBucketName;
    @Value("${s3-repo-bucket-komis-images-resized}")
    private String s3KomisResizedImagesBucketName;
    @Value("${resized-image-width}")
    private String resizeImageWidth;

    @Autowired
    public CarPhotoServiceImpl(CarPhotoDAO modelDAO, FileService fileService, CarService carService) {
        super(modelDAO);
        this.fileService = fileService;
        this.carService = carService;
    }

    @Override
    public CarPhoto loadCarPhoto(MultipartFile multipartFile, Long carId) throws IOException {
        CarPhoto carPhoto = new CarPhoto();
        File file = fileService.multipartFileToFile(multipartFile);
        loadCarImage(carPhoto, file);
        loadResizedImage(carPhoto, file);
        carPhoto = super.addObject(carPhoto);
        updateCarWithPhoto(carId, carPhoto);
        return carPhoto;
    }

    private void updateCarWithPhoto(Long carId, CarPhoto carPhoto) {
        Car car = carService.findOne(carId);
        CarPhoto carPhotoToDelete = (car.getDefaultCarPhoto());
        car.setDefaultCarPhoto(carPhoto);
        car.setPhoto(carPhoto.getResizedPhotoUrl());
        carService.updateObject(car);
        if (carPhotoToDelete != null) {
            deleteObject(carPhotoToDelete);
        }
    }

    @Override
    public void deleteObject(CarPhoto object) {
        fileService.deleteS3File(object.getPhotoS3Id(), s3KomisImagesBucketName);
        fileService.deleteS3File(object.getResizedPhotoS3Id(), s3KomisResizedImagesBucketName);
        super.deleteObject(object);
    }

    private void loadResizedImage(CarPhoto carPhoto, File file) throws IOException {
        File resizedfile = File.createTempFile(RESIZED_PREFIX, ".jpg");
        resizeImage(file, Integer.parseInt(resizeImageWidth), resizedfile);
        String imageS3Id = getImageS3Id();
        fileService.loadImages(imageS3Id, s3KomisResizedImagesBucketName, resizedfile);
        carPhoto.setResizedPhotoS3Id(imageS3Id);
        carPhoto.setResizedPhotoUrl(fileService.getS3FileDownloadURL(imageS3Id, s3KomisResizedImagesBucketName));
        resizedfile.delete();
    }

    private void loadCarImage(CarPhoto carPhoto, File file) {
        String imageS3Id = getImageS3Id();
        fileService.loadImages(imageS3Id, s3KomisImagesBucketName, file);
        carPhoto.setPhotoUrl(fileService.getS3FileDownloadURL(imageS3Id, s3KomisImagesBucketName));
        carPhoto.setPhotoS3Id(imageS3Id);
    }

    private String getImageS3Id() {
        return UUID.randomUUID().toString();
    }

    private void resizeImage(File inputfile, int newWidth, File outputFile) throws IOException {
        BufferedImage originalImage = ImageIO.read(inputfile);
        float scaleRatio = (float) originalImage.getWidth() / (float) newWidth;

        BufferedImage scaledImage = new BufferedImage(newWidth, Math.round(originalImage.getHeight() / scaleRatio),
                BufferedImage.TYPE_INT_RGB);

        Graphics2D graphics2d = createGraphics2D(scaledImage);

        graphics2d.drawImage(originalImage, 0, 0, scaledImage.getWidth(), scaledImage.getHeight(), null);
        graphics2d.dispose();

        ImageIO.write(scaledImage, "jpg", outputFile);
    }

    private Graphics2D createGraphics2D(BufferedImage bufferedImage) {
        Graphics2D graphics2d = bufferedImage.createGraphics();
        graphics2d.setBackground(Color.WHITE);
        graphics2d.clearRect(0, 0, bufferedImage.getWidth(), bufferedImage.getHeight());

        return graphics2d;
    }

}
