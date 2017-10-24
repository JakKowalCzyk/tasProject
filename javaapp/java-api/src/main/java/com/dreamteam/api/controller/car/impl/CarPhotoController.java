package com.dreamteam.api.controller.car.impl;

import com.dreamteam.api.model.http.car.CarPhoto;
import com.dreamteam.api.model.mapper.car.CarPhotoMapper;
import com.dreamteam.api.service.car.CarPhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * Created by JKowalczyk on 2017-10-24.
 */
@RestController
public class CarPhotoController implements com.dreamteam.api.controller.car.CarPhotoController {

    private CarPhotoService carPhotoService;
    private CarPhotoMapper carPhotoMapper;

    @Autowired
    public CarPhotoController(CarPhotoService carPhotoService, CarPhotoMapper carPhotoMapper) {
        this.carPhotoService = carPhotoService;
        this.carPhotoMapper = carPhotoMapper;
    }

    @Override
    public CarPhoto uploadCarPhoto(MultipartFile multipartFile) throws IOException {
        return carPhotoMapper.mapToHttpObject(carPhotoService.loadCarPhoto(multipartFile));
    }
}
