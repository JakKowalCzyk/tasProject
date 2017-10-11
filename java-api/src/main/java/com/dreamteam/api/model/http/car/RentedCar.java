package com.dreamteam.api.model.http.car;

import com.dreamteam.api.model.http.HttpModel;
import lombok.Data;

import java.util.Date;

/**
 * Created by JKowalczyk on 2017-10-11.
 */
@Data
public class RentedCar extends HttpModel {

    private Long carId;
    private Long userId;
    private boolean isActive;
    private Date from;
    private Date to;
    private String totalPrice;
}
