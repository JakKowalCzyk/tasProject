package com.dreamteam.api.controller.car.impl;

import com.dreamteam.api.controller.car.RentedCarController;
import com.dreamteam.api.controller.impl.GenericControllerImpl;
import com.dreamteam.api.model.http.car.RentedCar;
import com.dreamteam.api.model.mapper.car.RentedCarMapper;
import com.dreamteam.api.service.car.RentedCarService;
import com.dreamteam.api.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

/**
 * Created by JK on 2017-10-11.
 */
@RestController
public class RentedCarControllerImpl extends GenericControllerImpl<RentedCar, com.dreamteam.api.model.bo.car.RentedCar> implements RentedCarController {

    private UserService userService;

    @Autowired
    public RentedCarControllerImpl(RentedCarService genericService, RentedCarMapper abstractMapper, UserService userService) {
        super(genericService, abstractMapper);
        this.userService = userService;
    }

    @Override
    public RentedCar getObject(@PathVariable Long id) {
        return super.getObject(id);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public RentedCar updateObject(@RequestBody RentedCar model) {
        return super.updateObject(model);
    }

    @Override
    public RentedCar addObject(@Valid @RequestBody RentedCar model, Principal principal) {
        model.setUserId(userService.findByEmail(principal.getName()).getId());
        return super.addObject(model);
    }

    @Override
    public Collection<RentedCar> findAll() {
        return super.findAll();
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteObject(@PathVariable Long id) {
        super.deleteObject(id);
    }

    @Override
    public void cancelRent(@PathVariable Long id) {
        getGenericService().cancelRent(id);
    }

    @Override
    public ResponseEntity<Boolean> isExist(@PathVariable Long id) {
        return super.isExist(id);
    }

    @Override
    public RentedCarService getGenericService() {
        return (RentedCarService) super.getGenericService();
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public Collection<RentedCar> findByUser(@PathVariable Long id) {
        return getGenericService().findByUser(id).stream().map(rentedCar -> getAbstractMapper().mapToHttpObject(rentedCar)).collect(Collectors.toList());
    }

    @Override
    public Collection<RentedCar> findByPrincipal(Principal principal) {
        return getGenericService().findByUser(userService.findByEmail(principal.getName()).getId())
                .stream().map(rentedCar -> getAbstractMapper().mapToHttpObject(rentedCar)).collect(Collectors.toList());
    }

    @Override
    public Collection<RentedCar> findByCar(@PathVariable Long id) {
        return getGenericService().findByCar(id).stream().map(rentedCar -> getAbstractMapper().mapToHttpObject(rentedCar)).collect(Collectors.toList());
    }

    @Override
    public Collection<RentedCar> findActive() {
        return getGenericService().findActive().stream().map(rentedCar -> getAbstractMapper().mapToHttpObject(rentedCar)).collect(Collectors.toList());
    }

    @Override
    public Collection<RentedCar> findWillBeActive() {
        return getGenericService().findWillBeActive().stream().map(rentedCar -> getAbstractMapper().mapToHttpObject(rentedCar)).collect(Collectors.toList());
    }

    @Override
    public boolean isCarFreeInGivenDates(@PathVariable Long id, @RequestHeader @DateTimeFormat(pattern = "yyyy-MM-dd") Date from, @RequestHeader @DateTimeFormat(pattern = "yyyy-MM-dd") Date to) {
        return getGenericService().isCarFreeInGivenDates(id, from, to);
    }


}
