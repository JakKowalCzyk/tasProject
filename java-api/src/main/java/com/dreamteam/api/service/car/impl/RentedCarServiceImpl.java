package com.dreamteam.api.service.car.impl;

import com.dreamteam.api.dao.car.RentedCarDAO;
import com.dreamteam.api.model.bo.car.RentedCar;
import com.dreamteam.api.service.car.RentedCarService;
import com.dreamteam.api.service.impl.GenericServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

/**
 * Created by JK on 2017-10-11.
 */
@Service
public class RentedCarServiceImpl extends GenericServiceImpl<RentedCar> implements RentedCarService {

    @Autowired
    public RentedCarServiceImpl(RentedCarDAO modelDAO) {
        super(modelDAO);
    }

    @Override
    public Collection<RentedCar> findByUser(Long userId) {
        return getModelDAO().findByUser(userId);
    }

    @Override
    public Collection<RentedCar> findByCar(Long carId) {
        return getModelDAO().findByCar(carId);
    }

    @Override
    public RentedCarDAO getModelDAO() {
        return (RentedCarDAO) super.getModelDAO();
    }
}
