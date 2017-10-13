package com.dreamteam.api.dao.car;

import com.dreamteam.api.dao.ModelDAO;
import com.dreamteam.api.model.bo.car.Brand;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;

/**
 * Created by JK on 2017-10-11.
 */
@Repository
public interface BrandDAO extends ModelDAO<Brand> {

    @Query("select o from Brand o where lower(o.name) LIKE CONCAT('%',:tag,'%')")
    Collection<Brand> searchByName(@Param("tag") String tag);
}
