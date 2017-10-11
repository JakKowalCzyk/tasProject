package com.dreamteam.api.model.mapper.car;

import com.dreamteam.api.model.http.car.RentedCar;
import com.dreamteam.api.model.mapper.AbstractMapper;
import com.dreamteam.api.service.car.CarService;
import com.dreamteam.api.service.car.RentedCarService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by JK on 2017-10-11.
 */
@Component
public class RentedCarMapper extends AbstractMapper<RentedCar, com.dreamteam.api.model.bo.car.RentedCar> {

    private CarService carService;
    private RentedCarService rentedCarService;

    @Autowired
    public RentedCarMapper(ModelMapper modelMapper, CarService carService, RentedCarService rentedCarService) {
        super(modelMapper);
        this.carService = carService;
        this.rentedCarService = rentedCarService;
    }

    @Override
    protected RentedCar buildHttpObject(com.dreamteam.api.model.bo.car.RentedCar modelObject) {
        return getModelMapper().map(modelObject, RentedCar.class);
    }

    @Override
    protected com.dreamteam.api.model.bo.car.RentedCar buildModelObject(RentedCar httpObject) {
        com.dreamteam.api.model.bo.car.RentedCar rentedCar = getModelMapper().map(httpObject, com.dreamteam.api.model.bo.car.RentedCar.class);

        if (httpObject.getId() != null) {
            rentedCar.setUser(rentedCarService.findOne(httpObject.getId()).getUser());
        }
        rentedCar.setCar(carService.findOne(httpObject.getCarId()));

        return rentedCar;
    }
}
