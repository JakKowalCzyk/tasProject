package com.dreamteam.api.service.file.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.dreamteam.api.service.file.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * Created by JKowalczyk on 2017-10-26.
 */
@Service
public class FileServiceImpl implements FileService {

    private AmazonS3 amazonS3Client;

    @Autowired
    public FileServiceImpl(AmazonS3 amazonS3Client) {
        this.amazonS3Client = amazonS3Client;
    }

    @Override
    public File multipartFileToFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        convFile.createNewFile();
        FileOutputStream fileOutputStream = new FileOutputStream(convFile);
        fileOutputStream.write(file.getBytes());
        fileOutputStream.close();
        return convFile;
    }

    @Override
    public void loadImages(String fileName, String bucketName, File file) {
        uploadFileToS3(fileName, bucketName, file);
    }

    private PutObjectRequest createPutObjectRequest(String objectKey, String bucketName, File objectFile) {
        PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, objectKey, objectFile);
        putObjectRequest.setCannedAcl(CannedAccessControlList.PublicRead);

        return putObjectRequest;
    }


    @Override
    public void uploadFileToS3(String filePath, String bucketName, File file) {
        amazonS3Client.putObject(createPutObjectRequest(filePath, bucketName, file));
    }

    @Override
    public String getS3FileDownloadURL(String objectKey, String bucketName) {
        return amazonS3Client.getUrl(bucketName, objectKey).toString();
    }

    @Override
    public void deleteS3File(String objectKey, String bucketName) {
        amazonS3Client.deleteObject(new DeleteObjectRequest(bucketName, objectKey));
    }
}
