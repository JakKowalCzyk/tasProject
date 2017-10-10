package com.dreamteam.api.controller;

import com.dreamteam.api.model.http.HttpModel;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Collection;

public interface GenericController<T extends HttpModel> {

    @ApiOperation(value = "Get object by id")
    T getObject(@PathVariable Long id);

    @ApiOperation(value = "Update object")
    T updateObject(@RequestBody T model);

    @ApiOperation(value = "Add new object")
    T addObject(@RequestBody T model);

    @ApiOperation(value = "Find all")
    Collection<T> findAll();

    @ApiOperation(value = "Delete object by id")
    void deleteObject(@PathVariable Long id);

    @ApiOperation(value = "Check if exist")
    ResponseEntity<Boolean> isExist(@PathVariable Long id);

}
