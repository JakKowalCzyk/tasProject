package com.dreamteam.api.service.car;

import com.dreamteam.api.model.bo.car.Car;
import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import com.dreamteam.api.service.GenericService;

import java.util.Collection;
import java.util.Date;

public interface CarService extends GenericService<Car> {

    Collection<Car> findByBrand(Long brandId);

    Collection<Car> findByFuelType(FuelType fuelType);

    Collection<Car> findByDriveType(DriveType driveType);

    Collection<Car> findByCategoryType(CategoryType categoryType);

    Collection<Car> searchByName(String tag);

    Collection<Car> findPossibleCarToRentInGivenDates(Date fromDate, Date toDate);

    Collection<Car> findByFilteredParameters(Long brandId, FuelType fuelType, DriveType driveType, CategoryType categoryType,
                                             Double priceSmallerThan, Double priceBiggerThan,
                                             Integer millageSmallerThan, Integer millageBiggerThan,
                                             Integer powerSmallerThan, Integer powerBiggerThan,
                                             Boolean hasElectricWindow, Boolean hasNavi,
                                             Boolean hasAirConditioning, Boolean hasManualGearbox,
                                             Boolean hasSunroof, Boolean hasRadio);

}
