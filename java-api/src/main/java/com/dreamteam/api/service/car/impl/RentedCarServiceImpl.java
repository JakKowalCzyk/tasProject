package com.dreamteam.api.service.car.impl;

import com.dreamteam.api.dao.car.RentedCarDAO;
import com.dreamteam.api.model.bo.car.RentedCar;
import com.dreamteam.api.service.car.RentedCarService;
import com.dreamteam.api.service.impl.GenericServiceImpl;
import org.apache.commons.lang3.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.Collection;
import java.util.Date;
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
        if (isSameDay(object, new GregorianCalendar().getTime())) {
            object.setActive(true);
            object.setWillBeActive(false);
        } else {
            object.setActive(false);
            object.setWillBeActive(true);
        }
        return super.addObject(object);
    }

    private boolean isSameDay(RentedCar object, Date time) {
        return DateUtils.isSameDay(object.getFrom(), time);
    }

    private Double getTotalPriceForACar(RentedCar object) {
        if (isSameDay(object, object.getTo())) {
            return object.getCar().getPricePerDay();
        } else {
            int days = (int) ChronoUnit.DAYS.between(object.getFrom().toInstant(), object.getTo().toInstant());
            return object.getCar().getPricePerDay() * (days + 1);
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
    public boolean existBetweenGivenDates(Date fromDate, Date toDate, Long carId) {
        return getModelDAO().existBetweenGivenDates(fromDate, toDate, carId);
    }

    @Override
    public Collection<RentedCar> findActive() {
        return getModelDAO().findByIsActiveTrue();
    }

    @Override
    public Collection<RentedCar> findWillBeActive() {
        return getModelDAO().findByWillBeActiveTrue();
    }

    @Override
    @Scheduled(cron = "${update.car.cron}")
    public void updateActiveRents() {
        findActive().forEach(rentedCar -> {
            if (isDateBeforeNow(rentedCar.getTo())) {
                rentedCar.setActive(false);
                super.updateObject(rentedCar);
            }
        });
    }

    @Override
    @Scheduled(cron = "${update.car.cron}")
    public void updateWillBeActiveRents() {
        findWillBeActive().forEach(rentedCar -> {
            if (isDateBeforeNow(rentedCar.getFrom())) {
                rentedCar.setActive(true);
                rentedCar.setWillBeActive(false);
                super.updateObject(rentedCar);
            }
        });
    }

    private boolean isDateBeforeNow(Date date) {
        return date.before(new GregorianCalendar().getTime());
    }

    @Override
    public RentedCarDAO getModelDAO() {
        return (RentedCarDAO) super.getModelDAO();
    }
}
