package com.dreamteam.api.service.car.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.dreamteam.api.dao.car.CarPhotoDAO;
import com.dreamteam.api.model.bo.car.CarPhoto;
import com.dreamteam.api.service.car.CarPhotoService;
import com.dreamteam.api.service.impl.GenericServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.UUID;

/**
 * Created by JKowalczyk on 2017-10-24.
 */
@Service
public class CarPhotoServiceImpl extends GenericServiceImpl<CarPhoto> implements CarPhotoService {

    private AmazonS3 amazonS3Client;

    @Value("${s3-repo-bucket-komis-images}")
    private String s3KomisImagesBucketName;

    @Autowired
    public CarPhotoServiceImpl(CarPhotoDAO modelDAO, AmazonS3 amazonS3Client) {
        super(modelDAO);
        this.amazonS3Client = amazonS3Client;
    }

    @Override
    public CarPhoto loadCarPhoto(MultipartFile multipartFile) throws IOException {
        File file = multipartFileToFile(multipartFile);
        return super.addObject(loadImages(UUID.randomUUID().toString(), s3KomisImagesBucketName, file));
    }

    public File multipartFileToFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        convFile.createNewFile();
        FileOutputStream fileOutputStream = new FileOutputStream(convFile);
        fileOutputStream.write(file.getBytes());
        fileOutputStream.close();
        return convFile;
    }

    private CarPhoto loadImages(String fileName, String bucketName, File file) throws IOException {
        uploadFileToS3(fileName, bucketName, file);
        CarPhoto carPhoto = new CarPhoto();
        carPhoto.setPhotoS3Id(fileName);
        carPhoto.setPhotoUrl(getS3FileDownloadURL(fileName, bucketName));
        return carPhoto;
    }

    private PutObjectRequest createPutObjectRequest(String objectKey, String bucketName, File objectFile) {
        PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, objectKey, objectFile);
        putObjectRequest.setCannedAcl(CannedAccessControlList.PublicRead);

        return putObjectRequest;
    }

    public void uploadFileToS3(String filePath, String bucketName, File file) {
        amazonS3Client.putObject(createPutObjectRequest(filePath, bucketName, file));
    }

    public String getS3FileDownloadURL(String objectKey, String bucketName) {
        return amazonS3Client.getUrl(bucketName, objectKey).toString();
    }
}
