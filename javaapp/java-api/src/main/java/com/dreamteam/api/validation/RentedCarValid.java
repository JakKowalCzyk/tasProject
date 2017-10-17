package com.dreamteam.api.validation;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

/**
 * Created by JKowalczyk on 2017-10-12.
 */
@Documented
@Constraint(validatedBy = RentedCarConstraintValidator.class)
@Target({TYPE, FIELD, ANNOTATION_TYPE, METHOD, PARAMETER})
@Retention(RUNTIME)
public @interface RentedCarValid {

    String message() default "Invalid rentedCar";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
