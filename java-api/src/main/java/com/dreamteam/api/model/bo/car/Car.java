package com.dreamteam.api.model.bo.car;

import com.dreamteam.api.model.bo.AbstractModel;
import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class Car extends AbstractModel {

    private String name;
    private String brand;
    private String pricePerDay;
    private String date;
    private int millage;
    private String photo;

    public Car() {
        super();
    }

}
