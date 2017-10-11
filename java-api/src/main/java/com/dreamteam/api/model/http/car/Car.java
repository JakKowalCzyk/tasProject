package com.dreamteam.api.model.http.car;

import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import com.dreamteam.api.model.http.HttpModel;
import lombok.Data;

@Data
public class Car extends HttpModel {
    private String name;
    private Long brandId;
    private String pricePerDay;
    private String date;
    private int millage;
    private String photo;
    private Integer power;
    private FuelType fuelType;
    private DriveType driveType;
    private CategoryType categoryType;

    public Car() {
        super();
    }

}
