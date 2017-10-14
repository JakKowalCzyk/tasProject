package com.dreamteam.api.model.http.car;

import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import com.dreamteam.api.model.http.HttpModel;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

@Data
public class Car extends HttpModel {
    private String name;
    private Long brandId;
    private Double pricePerDay;
    @JsonFormat(pattern = "yyyy")
    private String productionDate;
    private int millage;
    private String photo;
    private Integer power;
    private FuelType fuelType;
    private DriveType driveType;
    private CategoryType categoryType;
    private boolean hasAirConditioning;
    private boolean hasNavi;
    private boolean hasElectricWindow;
    private boolean hasRadio;
    private boolean hasSunroof;
    private boolean hasManualGearbox;

    public Car() {
        super();
    }

}
