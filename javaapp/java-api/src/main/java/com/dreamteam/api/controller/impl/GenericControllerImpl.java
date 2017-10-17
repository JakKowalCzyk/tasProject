package com.dreamteam.api.controller.impl;

import com.dreamteam.api.controller.GenericController;
import com.dreamteam.api.model.bo.AbstractModel;
import com.dreamteam.api.model.http.HttpModel;
import com.dreamteam.api.model.mapper.AbstractMapper;
import com.dreamteam.api.service.GenericService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Collection;
import java.util.stream.Collectors;

public abstract class GenericControllerImpl<T extends HttpModel, E extends AbstractModel> implements GenericController<T> {

    private GenericService<E> genericService;
    private AbstractMapper<T, E> abstractMapper;

    public GenericControllerImpl(GenericService<E> genericService, AbstractMapper<T, E> abstractMapper) {
        this.genericService = genericService;
        this.abstractMapper = abstractMapper;
    }

    @Override
    public T getObject(@PathVariable Long id) {
        return abstractMapper.mapToHttpObject(genericService.findOne(id));
    }

    @Override
    public T updateObject(@RequestBody T model) {
        return abstractMapper.mapToHttpObject(genericService.updateObject(abstractMapper.mapToModel(model)));
    }

    @Override
    public T addObject(@RequestBody T model) {
        return abstractMapper.mapToHttpObject(genericService.addObject(abstractMapper.mapToModel(model)));
    }

    @Override
    public Collection<T> findAll() {
        return genericService.findAll().stream().map(e -> abstractMapper.mapToHttpObject(e)).collect(Collectors.toList());
    }

    @Override
    public void deleteObject(@PathVariable Long id) {
        genericService.deleteObject(id);
    }

    @Override
    public ResponseEntity<Boolean> isExist(@PathVariable Long id) {
        return new ResponseEntity<Boolean>(genericService.exists(id) ? HttpStatus.OK : HttpStatus.NOT_FOUND);
    }

    public GenericService<E> getGenericService() {
        return genericService;
    }

    public AbstractMapper<T, E> getAbstractMapper() {
        return abstractMapper;
    }
}
