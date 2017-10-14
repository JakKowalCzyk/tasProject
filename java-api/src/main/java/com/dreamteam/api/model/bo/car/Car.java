package com.dreamteam.api.model.bo.car;

import com.dreamteam.api.model.bo.AbstractModel;
import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Car extends AbstractModel {

    private String name;
    private Double pricePerDay;
    private String productionDate;
    private int millage;
    @Column(columnDefinition = "TEXT")
    private String photo;
    @ManyToOne
    private Brand brand;
    private Integer power;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private FuelType fuelType;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DriveType driveType;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
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
