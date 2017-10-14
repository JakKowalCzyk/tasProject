package com.dreamteam.api.model.bo.car;

import com.dreamteam.api.model.bo.AbstractModel;
import com.dreamteam.api.model.bo.user.User;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import java.util.Date;

/**
 * Created by JKowalczyk on 2017-10-11.
 */
@Data
@Entity
public class RentedCar extends AbstractModel {

    @OneToOne
    private Car car;
    @OneToOne
    private User user;
    private boolean isActive;
    private boolean willBeActive;
    @Column(name = "from_date")
    private Date from;
    private Date to;
    private Double totalPrice;

    public RentedCar() {
        super();
    }
}
