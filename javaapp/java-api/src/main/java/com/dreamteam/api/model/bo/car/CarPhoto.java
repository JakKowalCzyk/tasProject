package com.dreamteam.api.model.bo.car;

import com.dreamteam.api.model.bo.AbstractModel;
import lombok.Data;

import javax.persistence.Entity;

/**
 * Created by JKowalczyk on 2017-10-24.
 */
@Entity
@Data
public class CarPhoto extends AbstractModel {

    private String photoUrl;
    private String photoS3Id;
    private String resizedPhotoUrl;
    private String resizedPhotoS3Id;

    public CarPhoto() {
    }
}
