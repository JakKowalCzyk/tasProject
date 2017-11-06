package com.dreamteam.api.service;

import com.amazonaws.services.s3.AmazonS3;
import com.dreamteam.api.config.PasswordConfig;
import com.dreamteam.api.dao.car.BrandDAO;
import com.dreamteam.api.dao.car.CarDAO;
import com.dreamteam.api.dao.car.CarPhotoDAO;
import com.dreamteam.api.dao.car.RentedCarDAO;
import com.dreamteam.api.dao.user.UserDAO;
import com.dreamteam.api.model.bo.car.Brand;
import com.dreamteam.api.model.bo.car.Car;
import com.dreamteam.api.model.bo.car.RentedCar;
import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import com.dreamteam.api.service.car.RentedCarService;
import com.dreamteam.api.service.email.EmailService;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

/**
 * Created by JK on 2017-11-02.
 */
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = {ServiceTestConfig.class, PasswordConfig.class})
public abstract class AbstractServiceTest {

    @MockBean
    protected RentedCarService rentedCarService;
    @MockBean
    protected RentedCarDAO rentedCarDAO;
    @MockBean
    protected CarDAO carDAO;
    @MockBean
    protected BrandDAO brandDAO;
    @MockBean
    protected CarPhotoDAO carPhotoDAO;
    @MockBean
    protected UserDAO userDAO;
    @MockBean
    protected EmailService emailService;
    @MockBean
    private AmazonS3 amazonS3;

    @Before
    public void setUp() throws Exception {
        Mockito.doNothing().when(emailService).sendEmailAboutCancellation(Mockito.any());
        Mockito.doNothing().when(emailService).sendEmailAboutScheduledRent(Mockito.any());
        Mockito.doNothing().when(emailService).sendEmailAboutStartedRent(Mockito.any());
        Mockito.doNothing().when(emailService).sendEmailAboutFinishedRent(Mockito.any());
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

    public RentedCar getRentedCarTest(Car car, Date from, Date to) {
        RentedCar rentedCar = new RentedCar();
        rentedCar.setCar(car);
        rentedCar.setFrom(from);
        rentedCar.setTo(to);
        return rentedCar;
    }

    public RentedCar getRentedCarTest(Car car, Date from, Date to, boolean isActive, boolean willBeActive) {
        RentedCar rentedCar = getRentedCarTest(car, from, to);
        rentedCar.setActive(isActive);
        rentedCar.setWillBeActive(willBeActive);
        return rentedCar;
    }

}
