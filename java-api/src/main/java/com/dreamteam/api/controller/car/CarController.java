package com.dreamteam.api.controller.car;

import com.dreamteam.api.controller.GenericController;
import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import com.dreamteam.api.model.http.car.Car;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Date;

@Api(tags = "Car API", description = "services for cars")
@RequestMapping(value = "/api/car")
public interface CarController extends GenericController<Car> {

    @Override
    @GetMapping(value = "/{id}")
    Car getObject(@PathVariable Long id);

    @Override
    @PutMapping
    Car updateObject(@RequestBody Car model);

    @Override
    @PostMapping
    Car addObject(@RequestBody Car model);

    @Override
    @GetMapping(value = "/")
    Collection<Car> findAll();

    @Override
    @DeleteMapping(value = "/{id}")
    void deleteObject(@PathVariable Long id);

    @Override
    @RequestMapping(value = "/{id}", method = RequestMethod.HEAD)
    ResponseEntity<Boolean> isExist(@PathVariable Long id);

    @ApiOperation(value = "Get cars by brand")
    @GetMapping(value = "/brand/{id}")
    Collection<Car> findByBrand(@PathVariable Long id);

    @ApiOperation(value = "Get cars by fuel type")
    @GetMapping(value = "/fuel/")
    Collection<Car> findByFuelType(@RequestHeader FuelType fuelType);

    @ApiOperation(value = "Get cars by drive type")
    @GetMapping(value = "/drive/")
    Collection<Car> findByDriveType(@RequestHeader DriveType driveType);

    @ApiOperation(value = "Get cars by category")
    @GetMapping(value = "/category/")
    Collection<Car> findByCategory(@RequestHeader CategoryType categoryType);

    @ApiOperation(value = "Search cars by name")
    @GetMapping(value = "/search")
    Collection<Car> searchByName(@RequestHeader String name);

    @ApiOperation(value = "Find cars possible to rent in given dates")
    @GetMapping(value = "/free")
    Collection<Car> findPossibleCarToRentInGivenDates(@RequestHeader @DateTimeFormat(pattern = "yyyy-MM-dd") Date from, @RequestHeader @DateTimeFormat(pattern = "yyyy-MM-dd") Date to);

    @ApiOperation(value = "Find by selected parameters")
    @GetMapping(value = "/filter")
    Collection<Car> findByFilteredParameters(@RequestParam(required = false) Long brandId, @RequestParam(required = false) FuelType fuelType,
                                             @RequestParam(required = false) DriveType driveType, @RequestParam(required = false) CategoryType categoryType,
                                             @RequestParam(required = false) Double priceSmallerThan, @RequestParam(required = false) Double priceBiggerThan,
                                             @RequestParam(required = false) Integer millageSmallerThan, @RequestParam(required = false) Integer millageBiggerThan,
                                             @RequestParam(required = false) Integer powerSmallerThan, @RequestParam(required = false) Integer powerBiggerThan,
                                             @RequestParam(required = false) Boolean hasElectricWindow, @RequestParam(required = false) Boolean hasNavi,
                                             @RequestParam(required = false) Boolean hasAirConditioning, @RequestParam(required = false) Boolean hasManualGearbox,
                                             @RequestParam(required = false) Boolean hasSunroof, @RequestParam(required = false) Boolean hasRadio);

}


