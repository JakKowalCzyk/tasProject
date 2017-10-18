package com.dreamteam.api.model.mapper.car;

import com.dreamteam.api.model.http.car.Car;
import com.dreamteam.api.model.mapper.AbstractMapper;
import com.dreamteam.api.service.car.BrandService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CarMapper extends AbstractMapper<Car, com.dreamteam.api.model.bo.car.Car> {

    private BrandService brandService;

    @Autowired
    public CarMapper(ModelMapper modelMapper, BrandService brandService) {
        super(modelMapper);
        this.brandService = brandService;
    }

    @Override
    protected Car buildHttpObject(com.dreamteam.api.model.bo.car.Car modelObject) {
        Car car = getModelMapper().map(modelObject, Car.class);

        return car;
    }

    @Override
    protected com.dreamteam.api.model.bo.car.Car buildModelObject(Car httpObject) {
        com.dreamteam.api.model.bo.car.Car car = getModelMapper().map(httpObject, com.dreamteam.api.model.bo.car.Car.class);

        car.setBrand(brandService.findOne(httpObject.getBrandId()));

        return car;
    }
}
