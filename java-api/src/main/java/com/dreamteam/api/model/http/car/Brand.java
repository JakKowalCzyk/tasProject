package com.dreamteam.api.model.http.car;

import com.dreamteam.api.model.http.HttpModel;
import lombok.Data;

/**
 * Created by JK on 2017-10-11.
 */
@Data
public class Brand extends HttpModel {

    private String name;

    public Brand() {
        super();
    }
}
