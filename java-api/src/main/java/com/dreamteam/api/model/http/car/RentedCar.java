package com.dreamteam.api.model.http.car;

import com.dreamteam.api.model.http.HttpModel;
import com.dreamteam.api.validation.RentedCarValid;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * Created by JKowalczyk on 2017-10-11.
 */
@RentedCarValid
@Data
public class RentedCar extends HttpModel {

    @NotNull(message = "Car has to be provided")
    private Long carId;
    private Long userId;
    private boolean isActive;
    private boolean willBeActive;
    private Date from;
    private Date to;
    private Double totalPrice;
}
