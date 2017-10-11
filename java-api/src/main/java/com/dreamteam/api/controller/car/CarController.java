package com.dreamteam.api.controller.car;

import com.dreamteam.api.controller.GenericController;
import com.dreamteam.api.model.http.car.Car;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@Api(tags = "Car API", description = "services for cars")
@RequestMapping(value = "/api/car")
public interface CarController extends GenericController<Car> {

    @Override
    @GetMapping(value = "/{id}")
    Car getObject(@PathVariable Long id);

    @Override
    @PutMapping
    Car updateObject(@RequestBody Car model);

    @Override
    @PostMapping
    Car addObject(@RequestBody Car model);

    @Override
    @GetMapping(value = "/")
    Collection<Car> findAll();

    @Override
    @DeleteMapping(value = "/{id}")
    void deleteObject(@PathVariable Long id);

    @Override
    @RequestMapping(value = "/{id}", method = RequestMethod.HEAD)
    ResponseEntity<Boolean> isExist(@PathVariable Long id);

    @ApiOperation(value = "Get cars by brand")
    @GetMapping(value = "/brand/{id}")
    Collection<Car> findByBrand(@PathVariable Long id);
}
