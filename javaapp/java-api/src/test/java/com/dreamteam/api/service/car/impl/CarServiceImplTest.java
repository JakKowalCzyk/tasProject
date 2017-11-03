package com.dreamteam.api.service.car.impl;

import com.dreamteam.api.model.bo.car.Brand;
import com.dreamteam.api.model.bo.car.Car;
import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import com.dreamteam.api.service.AbstractServiceTest;
import org.junit.Test;
import org.mockito.Mockito;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.GregorianCalendar;

import static org.junit.Assert.*;

/**
 * Created by JK on 2017-11-02.
 */
public class CarServiceImplTest extends AbstractServiceTest {

    @Test
    public void findPossibleCarToRentInGivenDates() throws Exception {
        CarServiceImpl carService = new CarServiceImpl(carDAO, rentedCarService);

        Brand brand1 = getBrandTest("br1", 1L);
        Brand brand2 = getBrandTest("br2", 2L);
        Brand brand3 = getBrandTest("br3", 3L);
        Car car1 = getCarTest(1L, brand1, "c1", 100.0, CategoryType.CITY, FuelType.DIESEL, DriveType.AWD, true);
        Car car2 = getCarTest(2L, brand2, "c2", 400.0, CategoryType.SPORT, FuelType.LPG, DriveType.RWD, false);
        Car car3 = getCarTest(3L, brand3, "c3", 40.0, CategoryType.SUV, FuelType.PB, DriveType.AWD, false);
        Mockito.when(carDAO.findAll()).thenReturn(Arrays.asList(car1, car2, car3));

        Mockito.when(rentedCarService.findCarIdsRentedInGivenDates(Mockito.any(), Mockito.any())).thenReturn(Collections.emptyList());
        Collection<Car> carCollection = carService.findPossibleCarToRentInGivenDates(new GregorianCalendar().getTime(), new GregorianCalendar().getTime());
        assertEquals(3, carCollection.size());

        Mockito.when(rentedCarService.findCarIdsRentedInGivenDates(Mockito.any(), Mockito.any())).thenReturn(Arrays.asList(car1.getId()));
        carCollection = carService.findPossibleCarToRentInGivenDates(new GregorianCalendar().getTime(), new GregorianCalendar().getTime());
        assertEquals(2, carCollection.size());
        assertFalse(carCollection.contains(car1));

        Mockito.when(rentedCarService.findCarIdsRentedInGivenDates(Mockito.any(), Mockito.any())).thenReturn(Arrays.asList(car1.getId(), car2.getId(), car3.getId()));
        carCollection = carService.findPossibleCarToRentInGivenDates(new GregorianCalendar().getTime(), new GregorianCalendar().getTime());
        assertTrue(carCollection.isEmpty());
    }

    @Test
    public void findByFilteredParameters() throws Exception {
        CarServiceImpl carService = new CarServiceImpl(carDAO, rentedCarService);

        Brand brand1 = getBrandTest("br1", 1L);
        Brand brand2 = getBrandTest("br2", 2L);
        Brand brand3 = getBrandTest("br3", 3L);
        Car car1 = getCarTest(1L, brand1, "c1", 100.0, CategoryType.CITY, FuelType.DIESEL, DriveType.AWD, true);
        Car car2 = getCarTest(2L, brand2, "c2", 400.0, CategoryType.SPORT, FuelType.LPG, DriveType.RWD, false);
        Car car3 = getCarTest(3L, brand3, "c3", 40.0, CategoryType.SUV, FuelType.PB, DriveType.AWD, false);
        Mockito.when(carDAO.findAll()).thenReturn(Arrays.asList(car1, car2, car3));

        Collection<Car> carCollection = carService.findByFilteredParameters(null, null, null, null, null, null, null, null,
                null, null, null, null, null, null, null, null, null, null);
        assertEquals(3, carCollection.size());

        carCollection = carService.findByFilteredParameters(brand1.getId(), null, null, null, null, null, null, null,
                null, null, null, null, null, null, null, null, null, null);
        assertEquals(1, carCollection.size());
        assertTrue(carCollection.contains(car1));

        carCollection = carService.findByFilteredParameters(brand1.getId(), null, null, null, null, null, null, null,
                null, null, false, false, null, null, null, null, null, null);
        assertTrue(carCollection.isEmpty());

        carCollection = carService.findByFilteredParameters(null, FuelType.PB, null, null, null, null, null, null,
                null, null, null, null, null, null, null, null, null, null);
        assertEquals(1, carCollection.size());
        assertTrue(carCollection.contains(car3));

        carCollection = carService.findByFilteredParameters(null, null, null, null, null, null, null, null,
                null, null, false, false, null, null, null, null, null, null);
        assertEquals(2, carCollection.size());
        assertTrue(carCollection.contains(car2));
        assertTrue(carCollection.contains(car3));

        carCollection = carService.findByFilteredParameters(null, null, DriveType.AWD, null, null, null, null, null,
                null, null, null, null, null, null, null, null, null, null);
        assertEquals(2, carCollection.size());
        assertTrue(carCollection.contains(car1));
        assertTrue(carCollection.contains(car3));

        carCollection = carService.findByFilteredParameters(null, null, null, CategoryType.SUV, null, null, null, null,
                null, null, null, null, null, null, null, null, null, null);
        assertEquals(1, carCollection.size());
        assertTrue(carCollection.contains(car3));

        carCollection = carService.findByFilteredParameters(null, null, null, null, 200.0, null, null, null,
                null, null, null, null, null, null, null, null, null, null);
        assertEquals(2, carCollection.size());
        assertTrue(carCollection.contains(car1));
        assertTrue(carCollection.contains(car3));

        Mockito.when(rentedCarService.findCarIdsRentedInGivenDates(Mockito.any(), Mockito.any())).thenReturn(Collections.emptyList());
        carCollection = carService.findByFilteredParameters(null, null, null, null, null, null, null, null,
                null, null, null, null, null, null,
                null, null, new GregorianCalendar().getTime(), new GregorianCalendar().getTime());
        assertEquals(3, carCollection.size());

        Mockito.when(rentedCarService.findCarIdsRentedInGivenDates(Mockito.any(), Mockito.any())).thenReturn(Arrays.asList(car1.getId()));
        carCollection = carService.findByFilteredParameters(null, null, null, null, null, null, null, null,
                null, null, null, null, null, null,
                null, null, new GregorianCalendar().getTime(), new GregorianCalendar().getTime());
        assertEquals(2, carCollection.size());
        assertFalse(carCollection.contains(car1));
    }

    @Test
    public void filterValues() throws Exception {
        CarServiceImpl carService = new CarServiceImpl(carDAO, rentedCarService);
        assertTrue(carService.filterValues(null, null, 4));

        assertTrue(carService.filterValues(4, null, 4));
        assertTrue(carService.filterValues(10, null, 4));
        assertFalse(carService.filterValues(10, null, 40));

        assertTrue(carService.filterValues(null, 100, 1000));
        assertTrue(carService.filterValues(null, 1000, 1000));
        assertFalse(carService.filterValues(null, 5000, 100));

        assertTrue(carService.filterValues(1000, 100, 500));
        assertTrue(carService.filterValues(1000, 1000, 1000));
        assertFalse(carService.filterValues(100, 200, 300));
        assertFalse(carService.filterValues(1000, 4000, 300));
    }

    public Car getCarTest(Long id, Brand brand, String name, Double price, CategoryType categoryType, FuelType fuelType, DriveType driveType, boolean hasRestGoods) {
        Car car = new Car();
        car.setId(id);
        car.setBrand(brand);
        car.setName(name);
        car.setPricePerDay(price);
        car.setCategoryType(categoryType);
        car.setFuelType(fuelType);
        car.setDriveType(driveType);
        car.setHasManualGearbox(hasRestGoods);
        car.setHasAirConditioning(hasRestGoods);
        car.setHasElectricWindow(hasRestGoods);
        car.setHasManualGearbox(hasRestGoods);
        car.setHasNavi(hasRestGoods);
        car.setHasRadio(hasRestGoods);
        car.setHasSunroof(hasRestGoods);
        return car;
    }

    public Brand getBrandTest(String name, Long id) {
        Brand brand = new Brand();
        brand.setName(name);
        brand.setId(id);
        return brand;
    }

}