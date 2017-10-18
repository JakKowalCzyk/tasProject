package com.dreamteam.api.model.mapper.car;

import com.dreamteam.api.model.http.car.Brand;
import com.dreamteam.api.model.mapper.AbstractMapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by JK on 2017-10-11.
 */
@Component
public class BrandMapper extends AbstractMapper<Brand, com.dreamteam.api.model.bo.car.Brand> {

    @Autowired
    public BrandMapper(ModelMapper modelMapper) {
        super(modelMapper);
    }

    @Override
    protected Brand buildHttpObject(com.dreamteam.api.model.bo.car.Brand modelObject) {
        return getModelMapper().map(modelObject, Brand.class);
    }

    @Override
    protected com.dreamteam.api.model.bo.car.Brand buildModelObject(Brand httpObject) {
        return getModelMapper().map(httpObject, com.dreamteam.api.model.bo.car.Brand.class);
    }
}
