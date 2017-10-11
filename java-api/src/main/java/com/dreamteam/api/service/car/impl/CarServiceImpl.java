package com.dreamteam.api.service.car.impl;

import com.dreamteam.api.dao.car.CarDAO;
import com.dreamteam.api.model.bo.car.Car;
import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import com.dreamteam.api.service.car.CarService;
import com.dreamteam.api.service.impl.GenericServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class CarServiceImpl extends GenericServiceImpl<Car> implements CarService {

    @Autowired
    public CarServiceImpl(CarDAO modelDAO) {
        super(modelDAO);
    }

    @Override
    public Collection<Car> findByBrand(Long brandId) {
        return getModelDAO().findByBrand(brandId);
    }

    @Override
    public Collection<Car> findByFuelType(FuelType fuelType) {
        return getModelDAO().findByFuelType(fuelType);
    }

    @Override
    public Collection<Car> findByDriveType(DriveType driveType) {
        return getModelDAO().findByDriveType(driveType);
    }

    @Override
    public Collection<Car> findByCategoryType(CategoryType categoryType) {
        return getModelDAO().findByCategoryType(categoryType);
    }

    @Override
    public CarDAO getModelDAO() {
        return (CarDAO) super.getModelDAO();
    }
}
