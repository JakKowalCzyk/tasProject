package com.dreamteam.api.model.mapper.car;

import com.dreamteam.api.model.http.car.Car;
import com.dreamteam.api.model.mapper.AbstractMapper;
import com.dreamteam.api.service.car.BrandService;
import com.dreamteam.api.service.car.CarService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CarMapper extends AbstractMapper<Car, com.dreamteam.api.model.bo.car.Car> {

    private BrandService brandService;
    private CarPhotoMapper carPhotoMapper;
    private CarService carService;

    @Autowired
    public CarMapper(ModelMapper modelMapper, BrandService brandService, CarPhotoMapper carPhotoMapper, CarService carService) {
        super(modelMapper);
        this.brandService = brandService;
        this.carPhotoMapper = carPhotoMapper;
        this.carService = carService;
    }

    @Override
    protected Car buildHttpObject(com.dreamteam.api.model.bo.car.Car modelObject) {
        Car car = getModelMapper().map(modelObject, Car.class);

        car.setDefaultCarPhoto(carPhotoMapper.buildHttpObject(modelObject.getDefaultCarPhoto()));

        return car;
    }

    @Override
    protected com.dreamteam.api.model.bo.car.Car buildModelObject(Car httpObject) {
        com.dreamteam.api.model.bo.car.Car car = getModelMapper().map(httpObject, com.dreamteam.api.model.bo.car.Car.class);

        car.setBrand(brandService.findOne(httpObject.getBrandId()));

        if (car.getId() != null) {
            car.setDefaultCarPhoto(carService.findOne(httpObject.getId()).getDefaultCarPhoto());
        }

        return car;
    }
}
