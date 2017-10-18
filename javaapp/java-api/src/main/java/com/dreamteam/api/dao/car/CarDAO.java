package com.dreamteam.api.dao.car;

import com.dreamteam.api.dao.ModelDAO;
import com.dreamteam.api.model.bo.car.Car;
import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface CarDAO extends ModelDAO<Car> {

    @Query("select car from Car car where car.brand.id = :brandId")
    Collection<Car> findByBrand(@Param("brandId") Long brandId);

    Collection<Car> findByFuelType(FuelType fuelType);

    Collection<Car> findByDriveType(DriveType driveType);

    Collection<Car> findByCategoryType(CategoryType categoryType);

    @Query("select o from Car o where lower(o.name) LIKE CONCAT('%',:tag,'%')")
    Collection<Car> searchByName(@Param("tag") String tag);
}
