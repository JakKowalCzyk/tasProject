package com.dreamteam.api.model.http.car;

import com.dreamteam.api.model.http.HttpModel;
import lombok.Data;

@Data
public class Car extends HttpModel {
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
