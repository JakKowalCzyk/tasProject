package com.dreamteam.api.service.car.impl;

import com.dreamteam.api.dao.car.CarDAO;
import com.dreamteam.api.model.bo.car.Car;
import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import com.dreamteam.api.service.car.CarPhotoService;
import com.dreamteam.api.service.car.CarService;
import com.dreamteam.api.service.car.RentedCarService;
import com.dreamteam.api.service.impl.GenericServiceImpl;
import org.apache.commons.lang3.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@Service
public class CarServiceImpl extends GenericServiceImpl<Car> implements CarService {

    private RentedCarService rentedCarService;
    private CarPhotoService carPhotoService;

    @Autowired
    public CarServiceImpl(CarDAO modelDAO, RentedCarService rentedCarService) {
        super(modelDAO);
        this.rentedCarService = rentedCarService;
    }

    @Override
    public void deleteObject(Car object) {
        super.deleteObject(object);
    }

    @Override
    public Collection<Car> findByBrand(Long brandId) {
        return getModelDAO().findByBrand(brandId);
    }

    @Override
    public Collection<Car> findByFuelType(FuelType fuelType) {
        return getModelDAO().findByFuelType(fuelType);
    }

    @Override
    public Collection<Car> findByDriveType(DriveType driveType) {
        return getModelDAO().findByDriveType(driveType);
    }

    @Override
    public Collection<Car> findByCategoryType(CategoryType categoryType) {
        return getModelDAO().findByCategoryType(categoryType);
    }

    @Override
    public Collection<Car> searchByName(String tag) {
        return getModelDAO().searchByName(tag);
    }

    @Override
    public Collection<Car> findPossibleCarToRentInGivenDates(Date fromDate, Date toDate) {
        Collection<Long> rentedCarIds = rentedCarService.findCarIdsRentedInGivenDates(DateUtils.setHours(fromDate, 6), DateUtils.setHours(toDate, 6));
        return findAll().stream().filter(car -> !rentedCarIds.contains(car.getId())).collect(Collectors.toList());
    }

    @Override
    public Collection<Car> findByFilteredParameters(Long brandId, FuelType fuelType, DriveType driveType, CategoryType categoryType,
                                                    Double priceSmallerThan, Double priceBiggerThan,
                                                    Integer millageSmallerThan, Integer millageBiggerThan,
                                                    Integer powerSmallerThan, Integer powerBiggerThan,
                                                    Boolean hasElectricWindow, Boolean hasNavi,
                                                    Boolean hasAirConditioning, Boolean hasManualGearbox,
                                                    Boolean hasSunroof, Boolean hasRadio,
                                                    Date fromDate, Date toDate) {
        Collection<Long> rentedCarIds = new ArrayList<>();
        if (fromDate != null && toDate != null) {
            rentedCarIds = rentedCarService.findCarIdsRentedInGivenDates(DateUtils.setHours(fromDate, 6), DateUtils.setHours(toDate, 6));
        }
        Collection<Long> finalRentedCarIds = rentedCarIds;
        return super.findAll().stream()
                .filter(car -> brandId == null || car.getBrand().getId().equals(brandId))
                .filter(car -> fuelType == null || car.getFuelType().equals(fuelType))
                .filter(car -> driveType == null || car.getDriveType().equals(driveType))
                .filter(car -> categoryType == null || car.getCategoryType().equals(categoryType))
                .filter(car -> filterValues(priceSmallerThan, priceBiggerThan, car.getPricePerDay()))
                .filter(car -> filterValues(millageSmallerThan, millageBiggerThan, car.getMillage()))
                .filter(car -> filterValues(powerSmallerThan, powerBiggerThan, car.getPower()))
                .filter(car -> hasElectricWindow == null || car.isHasElectricWindow() == hasElectricWindow)
                .filter(car -> hasNavi == null || car.isHasNavi() == hasNavi)
                .filter(car -> hasAirConditioning == null || car.isHasAirConditioning() == hasAirConditioning)
                .filter(car -> hasManualGearbox == null || car.isHasManualGearbox() == hasManualGearbox)
                .filter(car -> hasSunroof == null || car.isHasSunroof() == hasSunroof)
                .filter(car -> hasRadio == null || car.isHasRadio() == hasRadio)
                .filter(car -> finalRentedCarIds.isEmpty() || !finalRentedCarIds.contains(car.getId()))
                .collect(Collectors.toList());
    }

    public <T extends Number> boolean filterValues(T smallerThan, T biggerThan, T valueToCompare) {
        if ((biggerThan == null && smallerThan == null)) {
            return true;
        } else if (biggerThan == null) {
            return valueToCompare.doubleValue() <= smallerThan.doubleValue();
        } else if (smallerThan == null) {
            return valueToCompare.doubleValue() >= biggerThan.doubleValue();
        } else {
            return valueToCompare.doubleValue() >= biggerThan.doubleValue() && valueToCompare.doubleValue() <= smallerThan.doubleValue();
        }
    }

    @Override
    public void deleteObject(Long id) {
        rentedCarService.findByCar(id).forEach(rentedCar -> rentedCarService.deleteObject(rentedCar.getId()));
        deletePhotosFromAWS(id);
        super.deleteObject(id);
    }

    private void deletePhotosFromAWS(Long id) {
        Car car = super.findOne(id);
        carPhotoService.deleteObject(car.getDefaultCarPhoto());
    }

    @Override
    public CarDAO getModelDAO() {
        return (CarDAO) super.getModelDAO();
    }
}
