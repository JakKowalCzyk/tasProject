package com.dreamteam.api.model.mapper.car;

import com.dreamteam.api.model.http.car.CarPhoto;
import com.dreamteam.api.model.mapper.AbstractMapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by JKowalczyk on 2017-10-24.
 */
@Component
public class CarPhotoMapper extends AbstractMapper<CarPhoto, com.dreamteam.api.model.bo.car.CarPhoto> {

    @Autowired
    public CarPhotoMapper(ModelMapper modelMapper) {
        super(modelMapper);
    }

    @Override
    protected CarPhoto buildHttpObject(com.dreamteam.api.model.bo.car.CarPhoto modelObject) {
        return getModelMapper().map(modelObject, CarPhoto.class);
    }

    @Override
    protected com.dreamteam.api.model.bo.car.CarPhoto buildModelObject(CarPhoto httpObject) {
        return getModelMapper().map(httpObject, com.dreamteam.api.model.bo.car.CarPhoto.class);
    }
}
