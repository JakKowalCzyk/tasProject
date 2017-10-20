package com.dreamteam.api.model.http.car;

import com.dreamteam.api.model.http.HttpModel;
import lombok.Data;

import javax.validation.constraints.NotNull;

/**
 * Created by JK on 2017-10-11.
 */
@Data
public class Brand extends HttpModel {

    @NotNull(message = "Brand has to have name")
    private String name;

    public Brand() {
        super();
    }
}
