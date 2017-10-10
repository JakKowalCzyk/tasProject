package com.dreamteam.api.service.user.impl;

import com.dreamteam.api.dao.user.UserDAO;
import com.dreamteam.api.model.bo.user.User;
import com.dreamteam.api.service.impl.GenericServiceImpl;
import com.dreamteam.api.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends GenericServiceImpl<User> implements UserService {

    @Autowired
    public UserServiceImpl(UserDAO modelDAO) {
        super(modelDAO);
    }

    @Override
    public User findByEmail(String email) {
        return ((UserDAO) getModelDAO()).findByEmail(email);
    }
}
