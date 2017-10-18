package com.dreamteam.api.controller.types.tmpl;

import com.dreamteam.api.controller.types.TypeController;
import com.dreamteam.api.model.enums.CategoryType;
import com.dreamteam.api.model.enums.DriveType;
import com.dreamteam.api.model.enums.FuelType;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Collection;

/**
 * Created by JK on 2017-10-11.
 */
@RestController
public class TypeControllerImpl implements TypeController {

    @Override
    public Collection<DriveType> findAllDriveTypes() {
        return Arrays.asList(DriveType.values());
    }

    @Override
    public Collection<FuelType> findAllFuelTypes() {
        return Arrays.asList(FuelType.values());
    }

    @Override
    public Collection<CategoryType> findAllCategories() {
        return Arrays.asList(CategoryType.values());
    }

}
