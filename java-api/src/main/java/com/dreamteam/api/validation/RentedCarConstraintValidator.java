package com.dreamteam.api.validation;

import com.dreamteam.api.model.http.car.RentedCar;
import com.dreamteam.api.service.car.RentedCarService;
import org.apache.commons.lang3.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.GregorianCalendar;

/**
 * Created by JKowalczyk on 2017-10-12.
 */
@Component
public class RentedCarConstraintValidator implements ConstraintValidator<RentedCarValid, RentedCar> {

    private static final String DATE_ORDER = "Dates order is not correct";
    private static final String STARTING_DATE = "Starting date has to be at least today";
    private static final String DATE_EMPTY = "Dates have to be provided";
    private static final String DATE_USED = "Car is rented in given dates";

    @Autowired
    private RentedCarService rentedCarService;

    @Override
    public void initialize(RentedCarValid rentedCarValid) {
    }

    @Override
    public boolean isValid(RentedCar rentedCar, ConstraintValidatorContext constraintValidatorContext) {
        ValidationMessage validationMessage = new ValidationMessage();
        if (isRentedCarValid(rentedCar, validationMessage)) {
            return true;
        }

        constraintValidatorContext.disableDefaultConstraintViolation();
        constraintValidatorContext.buildConstraintViolationWithTemplate(validationMessage.getMessage()).addConstraintViolation();
        return false;
    }

    private boolean isRentedCarValid(RentedCar rentedCar, ValidationMessage result) {
        if (rentedCar.getFrom() == null || rentedCar.getTo() == null) {
            result.setMessage(DATE_EMPTY);
            return false;
        }
        if (!isDateOrderCorrect(rentedCar)) {
            result.setMessage(DATE_ORDER);
            return false;
        }
        if (!isStartingDateAtLeastToday(rentedCar)) {
            result.setMessage(STARTING_DATE);
            return false;
        }
        if (isDateUsed(rentedCar)) {
            result.setMessage(DATE_USED);
            return false;
        }
        return true;
    }

    private boolean isDateOrderCorrect(RentedCar rentedCar) {
        return rentedCar.getFrom().before(rentedCar.getTo());
    }

    private boolean isStartingDateAtLeastToday(RentedCar rentedCar) {
        if (DateUtils.isSameDay(rentedCar.getFrom(), new GregorianCalendar().getTime())) {
            return true;
        } else if (rentedCar.getTo().after(rentedCar.getFrom())) {
            return true;
        }
        return false;
    }

    private boolean isDateUsed(RentedCar rentedCar) {
        return rentedCarService.existBetweenGivenDates(rentedCar.getFrom(), rentedCar.getTo());
    }
}
