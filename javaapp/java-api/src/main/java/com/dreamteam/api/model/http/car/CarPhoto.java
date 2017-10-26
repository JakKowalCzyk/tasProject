package com.dreamteam.api.model.http.car;

import com.dreamteam.api.model.http.HttpModel;
import lombok.Data;

/**
 * Created by JKowalczyk on 2017-10-24.
 */
@Data
public class CarPhoto extends HttpModel {

    private String photoUrl;
    private String photoS3Id;
    private String resizedPhotoUrl;
    private String resizedPhotoS3Id;

    public CarPhoto() {
    }
}
