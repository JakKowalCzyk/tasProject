package com.dreamteam.api.dao.car;

import com.dreamteam.api.dao.ModelDAO;
import com.dreamteam.api.model.bo.car.RentedCar;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;

/**
 * Created by JK on 2017-10-11.
 */
@Repository
public interface RentedCarDAO extends ModelDAO<RentedCar> {

    @Query("select car from RentedCar car where car.user.id = :userId")
    Collection<RentedCar> findByUser(@Param("userId") Long userId);

    @Query("select rented from RentedCar rented where rented.car.id =:carId")
    Collection<RentedCar> findByCar(@Param("carId") Long carId);

}
