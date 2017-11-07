package com.dreamteam.api.service.car.impl;

import com.dreamteam.api.model.bo.car.Brand;
import com.dreamteam.api.model.bo.car.Car;
import com.dreamteam.api.model.bo.car.RentedCar;
import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import com.dreamteam.api.model.exception.CancelException;
import com.dreamteam.api.service.AbstractServiceTest;
import org.apache.commons.lang3.time.DateUtils;
import org.junit.Test;
import org.mockito.Mockito;
import org.mockito.invocation.InvocationOnMock;
import org.mockito.stubbing.Answer;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.GregorianCalendar;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.AdditionalAnswers.returnsFirstArg;

/**
 * Created by JK on 2017-11-04.
 */
public class RentedCarServiceImplTest extends AbstractServiceTest {


    @Test
    public void addObject() throws Exception {
        Mockito.when(rentedCarDAO.save(Mockito.any(RentedCar.class))).then(returnsFirstArg());
        Brand brand1 = getBrandTest("br1", 1L);
        Car car1 = getCarTest(1L, brand1, "c1", 100.0, CategoryType.CITY, FuelType.DIESEL, DriveType.AWD, true);

        RentedCarServiceImpl rentedCarService = new RentedCarServiceImpl(rentedCarDAO, emailService);

        RentedCar rentedCar = rentedCarService.addObject(getRentedCarTest(car1, new GregorianCalendar().getTime(), new GregorianCalendar().getTime()));
        assertTrue(rentedCar.isActive());
        assertFalse(rentedCar.isWillBeActive());
        assertEquals(car1.getPricePerDay(), rentedCar.getTotalPrice());

        rentedCar = rentedCarService.addObject(getRentedCarTest(car1, org.apache.commons.lang3.time.DateUtils.addDays(new GregorianCalendar().getTime(), 1), new GregorianCalendar().getTime()));
        assertFalse(rentedCar.isActive());
        assertTrue(rentedCar.isWillBeActive());
        assertNotNull(rentedCar.getTotalPrice());
    }

    @Test
    public void getTotalPriceForACar() throws Exception {
        Brand brand1 = getBrandTest("br1", 1L);
        Car car1 = getCarTest(1L, brand1, "c1", 100.0, CategoryType.CITY, FuelType.DIESEL, DriveType.AWD, true);

        RentedCarServiceImpl rentedCarService = new RentedCarServiceImpl(rentedCarDAO, emailService);

        assertEquals(car1.getPricePerDay(), rentedCarService.getTotalPriceForACar(getRentedCarTest(car1, new GregorianCalendar().getTime(), new GregorianCalendar().getTime())));

        assertTrue(car1.getPricePerDay() * 2 ==
                rentedCarService.getTotalPriceForACar(getRentedCarTest(car1, new GregorianCalendar().getTime(), DateUtils.addDays(new GregorianCalendar().getTime(), 1))));

        assertTrue(car1.getPricePerDay() * 3 ==
                rentedCarService.getTotalPriceForACar(getRentedCarTest(car1, DateUtils.addDays(new GregorianCalendar().getTime(), 3),
                        DateUtils.addDays(new GregorianCalendar().getTime(), 5))));
    }

    @Test
    public void updateActiveRents() throws Exception {
        Brand brand1 = getBrandTest("br1", 1L);
        Car car1 = getCarTest(1L, brand1, "c1", 100.0, CategoryType.CITY, FuelType.DIESEL, DriveType.AWD, true);

        RentedCarServiceImpl rentedCarService = new RentedCarServiceImpl(rentedCarDAO, emailService);

        Mockito.when(rentedCarDAO.save(Mockito.any(RentedCar.class))).thenReturn(new RentedCar());

        RentedCar rentedCar1 = getRentedCarTest(car1, DateUtils.addDays(new GregorianCalendar().getTime(), -1), new GregorianCalendar().getTime(), true, false);
        RentedCar rentedCar2 = getRentedCarTest(car1, new GregorianCalendar().getTime(), DateUtils.addHours(new GregorianCalendar().getTime(), 2), true, false);
        RentedCar rentedCar3 = getRentedCarTest(car1, new GregorianCalendar().getTime(), DateUtils.addDays(new GregorianCalendar().getTime(), 3), true, false);

        List<RentedCar> rentedCars = new ArrayList<>(Arrays.asList(rentedCar1, rentedCar2, rentedCar3));
        Mockito.when(rentedCarDAO.findByIsActiveTrue()).thenReturn(rentedCars);

        rentedCarService.updateActiveRents();

        assertFalse(rentedCars.get(0).isActive());
        assertFalse(rentedCars.get(0).isWillBeActive());
        assertTrue(rentedCars.get(1).isActive());
        assertFalse(rentedCars.get(1).isWillBeActive());
        assertTrue(rentedCars.get(2).isActive());
        assertFalse(rentedCars.get(2).isWillBeActive());
    }

    @Test
    public void updateWillBeActiveRents() throws Exception {
        Brand brand1 = getBrandTest("br1", 1L);
        Car car1 = getCarTest(1L, brand1, "c1", 100.0, CategoryType.CITY, FuelType.DIESEL, DriveType.AWD, true);

        RentedCarServiceImpl rentedCarService = new RentedCarServiceImpl(rentedCarDAO, emailService);

        Mockito.when(rentedCarDAO.save(Mockito.any(RentedCar.class))).thenReturn(new RentedCar());

        RentedCar rentedCar1 = getRentedCarTest(car1, new GregorianCalendar().getTime(), new GregorianCalendar().getTime(), false, true);
        RentedCar rentedCar2 = getRentedCarTest(car1, DateUtils.addDays(new GregorianCalendar().getTime(), 4), new GregorianCalendar().getTime(), false, true);

        List<RentedCar> rentedCars = new ArrayList<>(Arrays.asList(rentedCar1, rentedCar2));
        Mockito.when(rentedCarDAO.findByWillBeActiveTrue()).thenReturn(rentedCars);

        rentedCarService.updateWillBeActiveRents();

        assertTrue(rentedCars.get(0).isActive());
        assertFalse(rentedCars.get(0).isWillBeActive());
        assertFalse(rentedCars.get(1).isActive());
        assertTrue(rentedCars.get(1).isWillBeActive());
    }

    @Test
    public void cancelRent() throws Exception {
        Brand brand1 = getBrandTest("br1", 1L);
        Car car1 = getCarTest(1L, brand1, "c1", 100.0, CategoryType.CITY, FuelType.DIESEL, DriveType.AWD, true);

        RentedCarServiceImpl rentedCarService = new RentedCarServiceImpl(rentedCarDAO, emailService);

        RentedCar rentedCar = getRentedCarTest(car1, new GregorianCalendar().getTime(), new GregorianCalendar().getTime(), false, true);

        List<RentedCar> rentedCarHolder = new ArrayList<>();
        rentedCarHolder.add(rentedCar);

        Mockito.when(rentedCarDAO.findOne(Mockito.anyLong())).thenReturn(rentedCar);
        Mockito.doAnswer(new Answer() {
            @Override
            public Object answer(InvocationOnMock invocationOnMock) throws Throwable {
                rentedCarHolder.clear();
                return null;
            }
        }).when(rentedCarDAO).delete(Mockito.anyLong());

        assertEquals(1, rentedCarHolder.size());
        rentedCarService.cancelRent(1L);

        assertTrue(rentedCarHolder.isEmpty());

        rentedCar = getRentedCarTest(car1, new GregorianCalendar().getTime(), new GregorianCalendar().getTime(), false, false);
        Mockito.when(rentedCarDAO.findOne(Mockito.anyLong())).thenReturn(rentedCar);
        try {
            rentedCarService.cancelRent(1L);
        } catch (Exception e) {
            assertTrue(e instanceof CancelException);
        }

        rentedCar = getRentedCarTest(car1, new GregorianCalendar().getTime(), new GregorianCalendar().getTime(), true, false);
        Mockito.when(rentedCarDAO.findOne(Mockito.anyLong())).thenReturn(rentedCar);
        try {
            rentedCarService.cancelRent(1L);
        } catch (Exception e) {
            assertTrue(e instanceof CancelException);
        }
    }


}