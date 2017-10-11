package com.dreamteam.api.dao.car;

import com.dreamteam.api.dao.ModelDAO;
import com.dreamteam.api.model.bo.car.Car;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface CarDAO extends ModelDAO<Car> {

    @Query("select car from Car car where car.brand.id = :brandId")
    Collection<Car> findByBrand(@Param("brandId") Long brandId);
}
