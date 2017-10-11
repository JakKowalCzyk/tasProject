package com.dreamteam.api.controller.car.impl;

import com.dreamteam.api.controller.car.BrandController;
import com.dreamteam.api.controller.impl.GenericControllerImpl;
import com.dreamteam.api.model.http.car.Brand;
import com.dreamteam.api.model.mapper.car.BrandMapper;
import com.dreamteam.api.service.car.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

/**
 * Created by JK on 2017-10-11.
 */
@RestController
public class BrandControllerImpl extends GenericControllerImpl<Brand, com.dreamteam.api.model.bo.car.Brand> implements BrandController {

    @Autowired
    public BrandControllerImpl(BrandService genericService, BrandMapper abstractMapper) {
        super(genericService, abstractMapper);
    }

    @Override
    public Brand getObject(@PathVariable Long id) {
        return super.getObject(id);
    }

    @Override
    public Brand updateObject(@RequestBody Brand model) {
        return super.updateObject(model);
    }

    @Override
    public Brand addObject(@RequestBody Brand model) {
        return super.addObject(model);
    }

    @Override
    public Collection<Brand> findAll() {
        return super.findAll();
    }

    @Override
    public void deleteObject(@PathVariable Long id) {
        super.deleteObject(id);
    }

    @Override
    public ResponseEntity<Boolean> isExist(@PathVariable Long id) {
        return super.isExist(id);
    }
}
