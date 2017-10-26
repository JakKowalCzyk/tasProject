package com.dreamteam.api.model.http.car;

import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import com.dreamteam.api.model.http.HttpModel;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class Car extends HttpModel {

    @NotNull(message = "Car has to have name")
    private String name;
    @NotNull(message = "Car has to have brand")
    private Long brandId;
    @NotNull(message = "Car has to have price")
    private Double pricePerDay;
    @JsonFormat(pattern = "yyyy")
    private String productionDate;
    private int millage;
    private String photo;
    @NotNull(message = "Car has to have power")
    private Integer power;
    @NotNull(message = "Car has to have FuelType")
    private FuelType fuelType;
    @NotNull(message = "Car has to have DriveType")
    private DriveType driveType;
    @NotNull(message = "Car has to have Category")
    private CategoryType categoryType;
    private boolean hasAirConditioning;
    private boolean hasNavi;
    private boolean hasElectricWindow;
    private boolean hasRadio;
    private boolean hasSunroof;
    private boolean hasManualGearbox;
    private CarPhoto defaultCarPhoto;

    public Car() {
        super();
    }

}
