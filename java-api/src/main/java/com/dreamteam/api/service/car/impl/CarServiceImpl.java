package com.dreamteam.api.service.car.impl;

import com.dreamteam.api.dao.car.CarDAO;
import com.dreamteam.api.model.bo.car.Car;
import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import com.dreamteam.api.service.car.CarService;
import com.dreamteam.api.service.car.RentedCarService;
import com.dreamteam.api.service.impl.GenericServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@Service
public class CarServiceImpl extends GenericServiceImpl<Car> implements CarService {

    private RentedCarService rentedCarService;

    @Autowired
    public CarServiceImpl(CarDAO modelDAO, RentedCarService rentedCarService) {
        super(modelDAO);
        this.rentedCarService = rentedCarService;
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
    public Collection<Car> searchByName(String tag) {
        return getModelDAO().searchByName(tag);
    }

    @Override
    public Collection<Car> findPossibleCarToRentInGivenDates(Date fromDate, Date toDate) {
        Collection<Long> rentedCarIds = rentedCarService.findCarIdsRentedInGivenDates(fromDate, toDate);
        return findAll().stream().filter(car -> !rentedCarIds.contains(car.getId())).collect(Collectors.toList());
    }

    @Override
    public void deleteObject(Long id) {
        rentedCarService.findByCar(id).forEach(rentedCar -> rentedCarService.deleteObject(rentedCar.getId()));
        super.deleteObject(id);
    }

    @Override
    public CarDAO getModelDAO() {
        return (CarDAO) super.getModelDAO();
    }
}
