package com.dreamteam.api.controller.types;

import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Collection;

/**
 * Created by JK on 2017-10-11.
 */
@Api(tags = "Type API", description = "services types")
@RequestMapping(value = "/api/type")
public interface TypeController {

    @ApiOperation(value = "Get all drive types")
    @GetMapping(value = "/drive/")
    Collection<DriveType> findAllDriveTypes();

    @ApiOperation(value = "Get all fuel types")
    @GetMapping(value = "/fuel/")
    Collection<FuelType> findAllFuelTypes();

    @ApiOperation(value = "Get all categories")
    @GetMapping(value = "/category/")
    Collection<CategoryType> findAllCategories();

}
