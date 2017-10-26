package com.dreamteam.api.service.file;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

/**
 * Created by JKowalczyk on 2017-10-26.
 */
public interface FileService {

    File multipartFileToFile(MultipartFile file) throws IOException;

    void loadImages(String fileName, String bucketName, File file);

    void uploadFileToS3(String filePath, String bucketName, File file);

    String getS3FileDownloadURL(String objectKey, String bucketName);

    void deleteS3File(String objectKey, String bucketName);
}
