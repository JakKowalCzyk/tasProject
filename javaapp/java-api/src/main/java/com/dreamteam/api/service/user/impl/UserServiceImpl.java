package com.dreamteam.api.service.user.impl;

import com.dreamteam.api.dao.user.UserDAO;
import com.dreamteam.api.model.bo.user.User;
import com.dreamteam.api.model.enums.RoleType;
import com.dreamteam.api.model.exception.UserEmailException;
import com.dreamteam.api.service.car.RentedCarService;
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
    private RentedCarService rentedCarService;

    @Autowired
    public UserServiceImpl(UserDAO modelDAO, PasswordEncoder passwordEncoder, RentedCarService rentedCarService) {
        super(modelDAO);
        this.passwordEncoder = passwordEncoder;
        this.rentedCarService = rentedCarService;
    }

    @Override
    public User findByEmail(String email) {
        return ((UserDAO) getModelDAO()).findByEmail(getEmailWithSmallCases(email));
    }

    @Override
    public User setAdminToUser(Long id) {
        User userToUpdate = super.findOne(id);
        userToUpdate.setRoleType(RoleType.ROLE_ADMIN);
        return super.updateObject(userToUpdate);
    }

    @Override
    public User setUserToAdmin(Long id) {
        User userToUpdate = super.findOne(id);
        userToUpdate.setRoleType(RoleType.ROLE_USER);
        return super.updateObject(userToUpdate);
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = findByEmail(s);
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getHashPassword(), Arrays.asList(new SimpleGrantedAuthority(user.getRoleType().name())));
    }

    @Override
    public User addObject(User object) {
        if (findByEmail(getEmailWithSmallCases(object.getEmail())) != null) {
            throw new UserEmailException(getEmailWithSmallCases(object.getEmail()));
        }
        object.setEmail(getEmailWithSmallCases(object.getEmail()));
        object.setHashPassword(passwordEncoder.encode(object.getHashPassword()));
        return super.addObject(object);
    }

    @Override
    public User updateObject(User object) {
        object.setEmail(getEmailWithSmallCases(object.getEmail()));
        object.setHashPassword(super.findOne(object.getId()).getHashPassword());
        return super.updateObject(object);
    }

    private String getEmailWithSmallCases(String email) {
        return email.toLowerCase();
    }

    @Override
    public void deleteObject(Long id) {
        rentedCarService.findByUser(id).forEach(rentedCar -> rentedCarService.deleteObject(rentedCar.getId()));
        super.deleteObject(id);
    }
}
