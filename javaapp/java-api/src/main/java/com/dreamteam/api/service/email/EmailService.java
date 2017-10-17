package com.dreamteam.api.service.email;

import com.dreamteam.api.model.bo.car.RentedCar;

/**
 * Created by JK on 2017-10-13.
 */
public interface EmailService {

    void sendEmailAboutFinishedRent(RentedCar rentedCar);

    void sendEmailAboutScheduledRent(RentedCar rentedCar);

    void sendEmailAboutStartedRent(RentedCar rentedCar);

    void sendEmailAboutCancellation(RentedCar rentedCar);

}
