package com.dreamteam.api.service.car.impl;

import com.dreamteam.api.dao.car.CarDAO;
import com.dreamteam.api.model.bo.car.Car;
import com.dreamteam.api.service.car.CarService;
import com.dreamteam.api.service.impl.GenericServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarServiceImpl extends GenericServiceImpl<Car> implements CarService {

    @Autowired
    public CarServiceImpl(CarDAO modelDAO) {
        super(modelDAO);
    }
}
