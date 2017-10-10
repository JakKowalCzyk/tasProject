package com.dreamteam.api.model.mapper.car;

import com.dreamteam.api.model.http.car.Car;
import com.dreamteam.api.model.mapper.AbstractMapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CarMapper extends AbstractMapper<Car, com.dreamteam.api.model.bo.car.Car> {

    @Autowired
    public CarMapper(ModelMapper modelMapper) {
        super(modelMapper);
    }

    @Override
    protected Car buildHttpObject(com.dreamteam.api.model.bo.car.Car modelObject) {
        return getModelMapper().map(modelObject, Car.class);
    }

    @Override
    protected com.dreamteam.api.model.bo.car.Car buildModelObject(Car httpObject) {
        return getModelMapper().map(httpObject, com.dreamteam.api.model.bo.car.Car.class);
    }
}
