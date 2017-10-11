package com.dreamteam.api.controller.car;

import com.dreamteam.api.controller.GenericController;
import com.dreamteam.api.model.http.car.Brand;
import io.swagger.annotations.Api;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by JK on 2017-10-11.
 */
@Api(tags = "Brand API", description = "services for cars brand")
@RequestMapping(value = "/api/brand")
public interface BrandController extends GenericController<Brand> {

    @Override
    @GetMapping(value = "/{id}")
    Brand getObject(@PathVariable Long id);

    @Override
    @PutMapping
    Brand updateObject(@RequestBody Brand model);

    @Override
    @PostMapping
    Brand addObject(@RequestBody Brand model);

    @Override
    @GetMapping(value = "/")
    Collection<Brand> findAll();

    @Override
    @DeleteMapping(value = "/{id}")
    void deleteObject(@PathVariable Long id);

    @Override
    @RequestMapping(value = "/{id}", method = RequestMethod.HEAD)
    ResponseEntity<Boolean> isExist(@PathVariable Long id);
}
