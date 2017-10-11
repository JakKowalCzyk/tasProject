package com.dreamteam.api.service.car.impl;

import com.dreamteam.api.dao.car.BrandDAO;
import com.dreamteam.api.model.bo.car.Brand;
import com.dreamteam.api.service.car.BrandService;
import com.dreamteam.api.service.car.CarService;
import com.dreamteam.api.service.impl.GenericServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by JK on 2017-10-11.
 */
@Service
public class BrandServiceImpl extends GenericServiceImpl<Brand> implements BrandService {


    private CarService carService;

    @Autowired
    public BrandServiceImpl(BrandDAO modelDAO, CarService carService) {
        super(modelDAO);
        this.carService = carService;
    }

    @Override
    public void deleteObject(Long id) {
        carService.findByBrand(id).forEach(car -> carService.deleteObject(car.getId()));
        super.deleteObject(id);
    }
}
