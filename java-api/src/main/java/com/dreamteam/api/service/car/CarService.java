package com.dreamteam.api.service.car;

import com.dreamteam.api.model.bo.car.Car;
import com.dreamteam.api.service.GenericService;

import java.util.Collection;

public interface CarService extends GenericService<Car> {

    Collection<Car> findByBrand(Long brandId);
}
