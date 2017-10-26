package com.dreamteam.api.service.car;

import com.dreamteam.api.model.bo.car.CarPhoto;
import com.dreamteam.api.service.GenericService;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * Created by JKowalczyk on 2017-10-24.
 */
public interface CarPhotoService extends GenericService<CarPhoto> {

    CarPhoto loadCarPhoto(MultipartFile multipartFile, Long carId) throws IOException;
}
