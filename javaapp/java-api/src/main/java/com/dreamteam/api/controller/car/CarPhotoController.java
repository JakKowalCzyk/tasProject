package com.dreamteam.api.controller.car;

import com.dreamteam.api.model.http.car.CarPhoto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * Created by JKowalczyk on 2017-10-24.
 */
@Api(tags = "Car photos API", description = "services for car's photos")
@RequestMapping
public interface CarPhotoController {

    @PostMapping(value = "/api/car/{id}/photo")
    @ApiOperation(value = "upload photo")
    CarPhoto uploadCarPhoto(@RequestParam("file") MultipartFile multipartFile, @PathVariable Long id) throws IOException;
}
