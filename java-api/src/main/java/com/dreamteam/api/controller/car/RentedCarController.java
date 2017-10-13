package com.dreamteam.api.controller.car;

import com.dreamteam.api.controller.GenericController;
import com.dreamteam.api.model.http.car.RentedCar;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collection;

/**
 * Created by JK on 2017-10-11.
 */
@Api(tags = "Rented Car API", description = "services for rented cars")
@RequestMapping
public interface RentedCarController extends GenericController<RentedCar> {

    String BASE_PATH = "/api/car/rented";

    @Override
    @GetMapping(value = BASE_PATH + "/{id}")
    RentedCar getObject(@PathVariable Long id);

    @Override
    @PutMapping(value = BASE_PATH)
    RentedCar updateObject(@RequestBody RentedCar model);

    @PostMapping(value = BASE_PATH)
    RentedCar addObject(@RequestBody RentedCar model, Principal principal);

    @Override
    @GetMapping(value = BASE_PATH + "/")
    Collection<RentedCar> findAll();

    @Override
    @DeleteMapping(value = BASE_PATH + "/{id}")
    void deleteObject(@PathVariable Long id);

    @ApiOperation(value = "Cancel rent")
    @DeleteMapping(value = BASE_PATH + "/cancel/{id}")
    void cancelRent(@PathVariable Long id);

    @Override
    @RequestMapping(value = BASE_PATH + "/{id}", method = RequestMethod.HEAD)
    ResponseEntity<Boolean> isExist(@PathVariable Long id);

    @ApiOperation(value = "Find rented cars for user")
    @GetMapping(value = BASE_PATH + "/user/{id}")
    Collection<RentedCar> findByUser(@PathVariable Long id);

    @ApiOperation(value = "Find rented cars for logged user")
    @GetMapping(value = BASE_PATH + "/user/me")
    Collection<RentedCar> findByPrincipal(Principal principal);

    @ApiOperation(value = "Find rented cars by car")
    @GetMapping(value = "/api/car/{id}/rented")
    Collection<RentedCar> findByCar(@PathVariable Long id);

    @ApiOperation(value = "Find active rentedCars")
    @GetMapping(value = BASE_PATH + "/active")
    Collection<RentedCar> findActive();

    @ApiOperation(value = "Find rentedCars which will be active")
    @GetMapping(value = BASE_PATH + "/active/will")
    Collection<RentedCar> findWillBeActive();

}
