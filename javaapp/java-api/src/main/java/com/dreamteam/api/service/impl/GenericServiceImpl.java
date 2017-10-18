package com.dreamteam.api.service.impl;

import com.dreamteam.api.dao.ModelDAO;
import com.dreamteam.api.model.bo.AbstractModel;
import com.dreamteam.api.service.GenericService;

import java.util.Collection;

public abstract class GenericServiceImpl<T extends AbstractModel> implements GenericService<T> {

    private ModelDAO<T> modelDAO;

    public GenericServiceImpl(ModelDAO<T> modelDAO) {
        this.modelDAO = modelDAO;
    }

    @Override
    public T findOne(Long id) {
        return modelDAO.findOne(id);
    }

    @Override
    public Collection<T> findAll() {
        return modelDAO.findAll();
    }

    @Override
    public T addObject(T object) {
        return modelDAO.save(object);
    }

    @Override
    public T updateObject(T object) {
        return modelDAO.save(object);
    }

    @Override
    public void deleteObject(Long id) {
        modelDAO.delete(id);
    }

    @Override
    public void deleteObject(T object) {
        modelDAO.delete(object);
    }

    @Override
    public boolean exists(Long id) {
        return modelDAO.exists(id);
    }

    public ModelDAO<T> getModelDAO() {
        return modelDAO;
    }
}
