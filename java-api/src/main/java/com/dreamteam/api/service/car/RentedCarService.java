package com.dreamteam.api.service.car;

import com.dreamteam.api.model.bo.car.RentedCar;
import com.dreamteam.api.service.GenericService;

import java.util.Collection;
import java.util.Date;

/**
 * Created by JK on 2017-10-11.
 */
public interface RentedCarService extends GenericService<RentedCar> {

    Collection<RentedCar> findByUser(Long userId);

    Collection<RentedCar> findByCar(Long carId);

    boolean existBetweenGivenDates(Date fromDate, Date toDate, Long carId);

    Collection<RentedCar> findActive();

    Collection<RentedCar> findWillBeActive();

}
