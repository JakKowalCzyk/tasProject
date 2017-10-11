package com.dreamteam.api.service.user.impl;

import com.dreamteam.api.dao.user.UserDAO;
import com.dreamteam.api.model.bo.user.User;
import com.dreamteam.api.service.impl.GenericServiceImpl;
import com.dreamteam.api.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class UserServiceImpl extends GenericServiceImpl<User> implements UserService {

    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserDAO modelDAO, PasswordEncoder passwordEncoder) {
        super(modelDAO);
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User findByEmail(String email) {
        return ((UserDAO) getModelDAO()).findByEmail(email);
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = findByEmail(s);
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getHashPassword(), Arrays.asList(new SimpleGrantedAuthority(user.getRoleType().name())));
    }

    @Override
    public User addObject(User object) {
        object.setHashPassword(passwordEncoder.encode(object.getHashPassword()));
        return super.addObject(object);
    }

    @Override
    public User updateObject(User object) {
        object.setHashPassword(passwordEncoder.encode(object.getHashPassword()));
        return super.updateObject(object);
    }
}
