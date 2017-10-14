package com.dreamteam.api.model.mapper.car;

import com.dreamteam.api.model.http.car.RentedCar;
import com.dreamteam.api.model.mapper.AbstractMapper;
import com.dreamteam.api.service.car.CarService;
import com.dreamteam.api.service.car.RentedCarService;
import com.dreamteam.api.service.user.UserService;
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
    private UserService userService;

    @Autowired
    public RentedCarMapper(ModelMapper modelMapper, CarService carService, RentedCarService rentedCarService, UserService userService) {
        super(modelMapper);
        this.carService = carService;
        this.rentedCarService = rentedCarService;
        this.userService = userService;
    }

    @Override
    protected RentedCar buildHttpObject(com.dreamteam.api.model.bo.car.RentedCar modelObject) {
        return getModelMapper().map(modelObject, RentedCar.class);
    }

    @Override
    protected com.dreamteam.api.model.bo.car.RentedCar buildModelObject(RentedCar httpObject) {
        if (httpObject.getId() != null) {
            return rentedCarService.findOne(httpObject.getId());
        } else {
            com.dreamteam.api.model.bo.car.RentedCar rentedCar = getModelMapper().map(httpObject, com.dreamteam.api.model.bo.car.RentedCar.class);
            rentedCar.setCar(carService.findOne(httpObject.getCarId()));
            rentedCar.setUser(userService.findOne(httpObject.getUserId()));
            return rentedCar;
        }
    }
}
