package com.dreamteam.api.controller.car;

import com.dreamteam.api.controller.GenericController;
import com.dreamteam.api.model.http.car.Car;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

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
    @DeleteMapping
    void deleteObject(@PathVariable Long id);

    @Override
    @RequestMapping(method = RequestMethod.HEAD)
    ResponseEntity<Boolean> isExist(@PathVariable Long id);
}
