package com.dreamteam.api.model.bo.car;

import com.dreamteam.api.model.bo.AbstractModel;
import lombok.Data;

import javax.persistence.Entity;

/**
 * Created by JK on 2017-10-11.
 */
@Entity
@Data
public class Brand extends AbstractModel {

    private String name;

    public Brand() {
        super();
    }
}
