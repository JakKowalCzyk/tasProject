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
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    public Car updateObject(@Valid @RequestBody Car model) {
        return super.updateObject(model);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public Car addObject(@Valid @RequestBody Car model) {
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
    public Collection<Car> findByFilteredParameters(@RequestParam(required = false) Long brandId, @RequestParam(required = false) FuelType fuelType,
                                                    @RequestParam(required = false) DriveType driveType, @RequestParam(required = false) CategoryType categoryType,
                                                    @RequestParam(required = false) Double priceSmallerThan, @RequestParam(required = false) Double priceBiggerThan,
                                                    @RequestParam(required = false) Integer millageSmallerThan, @RequestParam(required = false) Integer millageBiggerThan,
                                                    @RequestParam(required = false) Integer powerSmallerThan, @RequestParam(required = false) Integer powerBiggerThan,
                                                    @RequestParam(required = false) Boolean hasElectricWindow, @RequestParam(required = false) Boolean hasNavi,
                                                    @RequestParam(required = false) Boolean hasAirConditioning, @RequestParam(required = false) Boolean hasManualGearbox,
                                                    @RequestParam(required = false) Boolean hasSunroof, @RequestParam(required = false) Boolean hasRadio) {
        return getGenericService().findByFilteredParameters(brandId, fuelType, driveType, categoryType,
                priceSmallerThan, priceBiggerThan, millageSmallerThan, millageBiggerThan, powerSmallerThan, powerBiggerThan,
                hasElectricWindow, hasNavi, hasAirConditioning, hasManualGearbox, hasSunroof, hasRadio, null, null)
                .stream().map(car -> getAbstractMapper().mapToHttpObject(car)).collect(Collectors.toList());
    }

    @Override
    public Collection<Car> findByFilteredParameters(@RequestParam(required = false) Long brandId, @RequestParam(required = false) FuelType fuelType,
                                                    @RequestParam(required = false) DriveType driveType, @RequestParam(required = false) CategoryType categoryType,
                                                    @RequestParam(required = false) Double priceSmallerThan, @RequestParam(required = false) Double priceBiggerThan,
                                                    @RequestParam(required = false) Integer millageSmallerThan, @RequestParam(required = false) Integer millageBiggerThan,
                                                    @RequestParam(required = false) Integer powerSmallerThan, @RequestParam(required = false) Integer powerBiggerThan,
                                                    @RequestParam(required = false) Boolean hasElectricWindow, @RequestParam(required = false) Boolean hasNavi,
                                                    @RequestParam(required = false) Boolean hasAirConditioning, @RequestParam(required = false) Boolean hasManualGearbox,
                                                    @RequestParam(required = false) Boolean hasSunroof, @RequestParam(required = false) Boolean hasRadio,
                                                    @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date from, @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date to) {
        return getGenericService().findByFilteredParameters(brandId, fuelType, driveType, categoryType,
                priceSmallerThan, priceBiggerThan, millageSmallerThan, millageBiggerThan, powerSmallerThan, powerBiggerThan,
                hasElectricWindow, hasNavi, hasAirConditioning, hasManualGearbox, hasSunroof, hasRadio, from, to)
                .stream().map(car -> getAbstractMapper().mapToHttpObject(car)).collect(Collectors.toList());
    }


    @Override
    public CarService getGenericService() {
        return (CarService) super.getGenericService();
    }
}
