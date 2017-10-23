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
            "(select case when " +
            "(select case when count(1) >0 then true else false END from rented_car rent where rent.car_id =:carId and  :fromDate between rent.from_date and rent.to_rent)=true " +
            "OR " +
            "(SELECT case when COUNT(1) > 0 then true else false end from rented_car rent where  rent.car_id =:carId and :toDate between rent.from_date and rent.to_rent)=true  " +
            "then true else false end)=true   " +
            "OR " +
            "(select case when  " +
            "(select case when count(1) >0 then true else false END from rented_car rent where rent.car_id =:carId and  rent.from_date between :fromDate and :toDate)=true   " +
            "OR  " +
            "(SELECT case when COUNT(1) > 0 then true else false end from rented_car rent where  rent.car_id =:carId and rent.to_rent between :fromDate and :toDate)=true   " +
            "then true else false end)=true   " +
            "then true else false end", nativeQuery = true)
    boolean existBetweenGivenDates(@Param("fromDate") Date fromDate, @Param("toDate") Date toDate, @Param("carId") Long carId);

    @Query("select rent.car.id from RentedCar rent where " +
            " ((:fromDate between rent.from and rent.to) or (:toDate between rent.from and rent.to)) " +
            "or " +
            "((rent.from between :fromDate and :toDate) or (rent.to between :fromDate and :toDate))")
    Collection<Long> findCarIdsRentedInGivenDates(@Param("fromDate") Date fromDate, @Param("toDate") Date toDate);

    @Query("select rent from RentedCar  rent where rent.isActive = 'TRUE'")
    Collection<RentedCar> findByIsActiveTrue();

    @Query("select rent from RentedCar  rent where rent.willBeActive = 'TRUE'")
    Collection<RentedCar> findByWillBeActiveTrue();

}
