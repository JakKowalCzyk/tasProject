package com.dreamteam.api.service.car.impl;

import com.dreamteam.api.dao.car.RentedCarDAO;
import com.dreamteam.api.model.bo.car.RentedCar;
import com.dreamteam.api.service.car.RentedCarService;
import com.dreamteam.api.service.impl.GenericServiceImpl;
import org.apache.commons.lang3.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.Collection;
import java.util.GregorianCalendar;

/**
 * Created by JK on 2017-10-11.
 */
@Service
public class RentedCarServiceImpl extends GenericServiceImpl<RentedCar> implements RentedCarService {

    @Autowired
    public RentedCarServiceImpl(RentedCarDAO modelDAO) {
        super(modelDAO);
    }

    @Override
    public RentedCar addObject(RentedCar object) {
        object.setTotalPrice(getTotalPriceForACar(object));
        if (isSameDay(object)) {
            object.setActive(true);
            object.setWillBeActive(false);
        } else {
            object.setActive(false);
            object.setWillBeActive(true);
        }
        return super.addObject(object);
    }

    private boolean isSameDay(RentedCar object) {
        return DateUtils.isSameDay(object.getFrom(), new GregorianCalendar().getTime());
    }

    private Double getTotalPriceForACar(RentedCar object) {
        if (isSameDay(object)) {
            return object.getCar().getPricePerDay();
        } else {
            int days = (int) ChronoUnit.DAYS.between(object.getFrom().toInstant(), object.getTo().toInstant());
            return object.getCar().getPricePerDay() * days;
        }
    }

    @Override
    public Collection<RentedCar> findByUser(Long userId) {
        return getModelDAO().findByUser(userId);
    }

    @Override
    public Collection<RentedCar> findByCar(Long carId) {
        return getModelDAO().findByCar(carId);
    }

    @Override
    public RentedCarDAO getModelDAO() {
        return (RentedCarDAO) super.getModelDAO();
    }
}
