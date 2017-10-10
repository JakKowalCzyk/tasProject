package com.dreamteam.api.model.http.car;

import com.dreamteam.api.model.http.HttpModel;
import lombok.Data;

@Data
public class Car extends HttpModel {
    private String name;
    private String brand;
    private String price;
    private String date;
    private int millage;
    private String photo;
    private boolean isRented;


    public Car() {
        super();
    }

}
