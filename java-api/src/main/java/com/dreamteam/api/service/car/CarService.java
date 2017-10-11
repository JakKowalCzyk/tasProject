package com.dreamteam.api.service.car;

import com.dreamteam.api.model.bo.car.Car;
import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import com.dreamteam.api.service.GenericService;

import java.util.Collection;

public interface CarService extends GenericService<Car> {

    Collection<Car> findByBrand(Long brandId);

    Collection<Car> findByFuelType(FuelType fuelType);

    Collection<Car> findByDriveType(DriveType driveType);

    Collection<Car> findByCategoryType(CategoryType categoryType);

}
