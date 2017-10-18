package com.dreamteam.api.model.mapper;

import com.dreamteam.api.model.bo.AbstractModel;
import com.dreamteam.api.model.http.HttpModel;
import org.modelmapper.ModelMapper;

public abstract class AbstractMapper<T extends HttpModel, E extends AbstractModel> {

    private ModelMapper modelMapper;

    public AbstractMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public E mapToModel(T httpObject) {
        E modelObject = buildModelObject(httpObject);


        return modelObject;
    }

    public T mapToHttpObject(E modelObject) {
        T httpObject = buildHttpObject(modelObject);


        return httpObject;
    }

    protected abstract T buildHttpObject(E modelObject);

    protected abstract E buildModelObject(T httpObject);


    public ModelMapper getModelMapper() {
        return modelMapper;
    }
}
