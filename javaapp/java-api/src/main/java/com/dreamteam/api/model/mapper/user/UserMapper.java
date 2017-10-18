package com.dreamteam.api.model.mapper.user;

import com.dreamteam.api.model.http.user.User;
import com.dreamteam.api.model.mapper.AbstractMapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserMapper extends AbstractMapper<User, com.dreamteam.api.model.bo.user.User> {
    @Autowired
    public UserMapper(ModelMapper modelMapper) {
        super(modelMapper);
    }

    @Override
    protected User buildHttpObject(com.dreamteam.api.model.bo.user.User modelObject) {
        return getModelMapper().map(modelObject, User.class);
    }

    @Override
    protected com.dreamteam.api.model.bo.user.User buildModelObject(User httpObject) {
        return getModelMapper().map(httpObject, com.dreamteam.api.model.bo.user.User.class);
    }
}
