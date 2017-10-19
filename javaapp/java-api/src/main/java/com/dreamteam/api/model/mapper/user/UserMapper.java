package com.dreamteam.api.model.mapper.user;

import com.dreamteam.api.model.enums.RoleType;
import com.dreamteam.api.model.http.user.User;
import com.dreamteam.api.model.mapper.AbstractMapper;
import com.dreamteam.api.service.user.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserMapper extends AbstractMapper<User, com.dreamteam.api.model.bo.user.User> {

    private UserService userService;
    @Autowired
    public UserMapper(ModelMapper modelMapper, UserService userService) {
        super(modelMapper);
        this.userService = userService;
    }

    @Override
    protected User buildHttpObject(com.dreamteam.api.model.bo.user.User modelObject) {
        return getModelMapper().map(modelObject, User.class);
    }

    @Override
    protected com.dreamteam.api.model.bo.user.User buildModelObject(User httpObject) {
        com.dreamteam.api.model.bo.user.User user = getModelMapper().map(httpObject, com.dreamteam.api.model.bo.user.User.class);
        if (httpObject.getId() == null) {
            user.setRoleType(RoleType.ROLE_USER);
        } else {
            user.setRoleType(userService.findOne(httpObject.getId()).getRoleType());
        }
        return user;
    }
}
