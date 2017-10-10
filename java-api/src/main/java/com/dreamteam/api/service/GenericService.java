package com.dreamteam.api.service;

import com.dreamteam.api.model.bo.AbstractModel;

import java.util.Collection;

public interface GenericService<T extends AbstractModel> {

    T findOne(Long id);

    Collection<T> findAll();

    T addObject(T object);

    T updateObject(T object);

    void deleteObject(Long id);

    void deleteObject(T object);

    boolean exists(Long id);
}
