package com.dreamteam.api.validation;

import com.dreamteam.api.model.http.car.RentedCar;
import org.apache.commons.lang3.time.DateUtils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.GregorianCalendar;

/**
 * Created by JKowalczyk on 2017-10-12.
 */
public class RentedCarConstraintValidator implements ConstraintValidator<RentedCarValid, RentedCar> {

    private static final String DATE_ORDER = "Dates order is not correct";
    private static final String STARTING_DATE = "Starting date has to be at least today";
    private static final String DATE_EMPTY = "Dates have to be provided";

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
}
