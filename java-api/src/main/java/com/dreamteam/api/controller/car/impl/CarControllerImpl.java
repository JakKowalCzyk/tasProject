package com.dreamteam.api.controller.car.impl;

import com.dreamteam.api.controller.car.CarController;
import com.dreamteam.api.controller.impl.GenericControllerImpl;
import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import com.dreamteam.api.model.http.car.Car;
import com.dreamteam.api.model.mapper.car.CarMapper;
import com.dreamteam.api.service.car.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@RestController
public class CarControllerImpl extends GenericControllerImpl<Car, com.dreamteam.api.model.bo.car.Car> implements CarController {

    @Autowired
    public CarControllerImpl(CarService genericService, CarMapper abstractMapper) {
        super(genericService, abstractMapper);
    }

    @Override
    public Car getObject(@PathVariable Long id) {
        return super.getObject(id);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public Car updateObject(@RequestBody Car model) {
        return super.updateObject(model);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public Car addObject(@RequestBody Car model) {
        return super.addObject(model);
    }

    @Override
    public Collection<Car> findAll() {
        return super.findAll();
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteObject(@PathVariable Long id) {
        super.deleteObject(id);
    }

    @Override
    public ResponseEntity<Boolean> isExist(@PathVariable Long id) {
        return super.isExist(id);
    }

    @Override
    public Collection<Car> findByBrand(@PathVariable Long id) {
        return getGenericService().findByBrand(id).stream().map(car -> getAbstractMapper().mapToHttpObject(car)).collect(Collectors.toList());
    }

    @Override
    public Collection<Car> findByFuelType(@RequestHeader FuelType fuelType) {
        return getGenericService().findByFuelType(fuelType).stream().map(car -> getAbstractMapper().mapToHttpObject(car)).collect(Collectors.toList());
    }

    @Override
    public Collection<Car> findByDriveType(@RequestHeader DriveType driveType) {
        return getGenericService().findByDriveType(driveType).stream().map(car -> getAbstractMapper().mapToHttpObject(car)).collect(Collectors.toList());
    }

    @Override
    public Collection<Car> findByCategory(@RequestHeader CategoryType categoryType) {
        return getGenericService().findByCategoryType(categoryType).stream().map(car -> getAbstractMapper().mapToHttpObject(car)).collect(Collectors.toList());
    }

    @Override
    public Collection<Car> searchByName(@RequestHeader String name) {
        return getGenericService().searchByName(name).stream().map(car -> getAbstractMapper().mapToHttpObject(car)).collect(Collectors.toList());
    }

    @Override
    public Collection<Car> findPossibleCarToRentInGivenDates(@RequestHeader @DateTimeFormat(pattern = "yyyy-MM-dd") Date from, @RequestHeader @DateTimeFormat(pattern = "yyyy-MM-dd") Date to) {
        return getGenericService().findPossibleCarToRentInGivenDates(from, to).stream().map(car -> getAbstractMapper().mapToHttpObject(car)).collect(Collectors.toList());
    }


    @Override
    public CarService getGenericService() {
        return (CarService) super.getGenericService();
    }
}
