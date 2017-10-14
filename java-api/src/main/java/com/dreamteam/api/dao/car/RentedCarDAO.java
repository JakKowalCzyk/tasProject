package com.dreamteam.api.dao.car;

import com.dreamteam.api.dao.ModelDAO;
import com.dreamteam.api.model.bo.car.RentedCar;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Date;

/**
 * Created by JK on 2017-10-11.
 */
@Repository
public interface RentedCarDAO extends ModelDAO<RentedCar> {

    @Query("select car from RentedCar car where car.user.id = :userId")
    Collection<RentedCar> findByUser(@Param("userId") Long userId);

    @Query("select rented from RentedCar rented where rented.car.id =:carId")
    Collection<RentedCar> findByCar(@Param("carId") Long carId);

    @Query(value = "select case when " +
            "(select case when count(1) >0 then true else false END from rented_car rent where rent.car_id =:carId and  :fromDate between rent.from_date and rent.to) " +
            "OR " +
            "(SELECT case when COUNT(1) > 0 then true else false end from rented_car rent where  rent.car_id =:carId and :toDate between rent.from_date and rent.to) " +
            "then true else false end", nativeQuery = true)
    boolean existBetweenGivenDates(@Param("fromDate") Date fromDate, @Param("toDate") Date toDate, @Param("carId") Long carId);

    Collection<RentedCar> findByIsActiveTrue();

    Collection<RentedCar> findByWillBeActiveTrue();

}
