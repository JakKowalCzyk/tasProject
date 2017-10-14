package com.dreamteam.api.service.car;

import com.dreamteam.api.model.bo.car.Brand;
import com.dreamteam.api.service.GenericService;

import java.util.Collection;

/**
 * Created by JK on 2017-10-11.
 */
public interface BrandService extends GenericService<Brand> {

    Collection<Brand> searchByName(String tag);

}
