package com.dreamteam.api.controller.user.impl;

import com.dreamteam.api.controller.impl.GenericControllerImpl;
import com.dreamteam.api.controller.user.UserController;
import com.dreamteam.api.model.http.user.User;
import com.dreamteam.api.model.mapper.user.UserMapper;
import com.dreamteam.api.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Collection;

@RestController
public class UserControllerImpl extends GenericControllerImpl<User, com.dreamteam.api.model.bo.user.User> implements UserController {

    @Autowired
    public UserControllerImpl(UserService genericService, UserMapper abstractMapper) {
        super(genericService, abstractMapper);
    }

    @Override
    public User getObject(@PathVariable Long id) {
        return super.getObject(id);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public User updateObject(@RequestBody User model) {
        return super.updateObject(model);
    }

    @Override
    public User addObject(@RequestBody User model) {
        return super.addObject(model);
    }

    @Override
    public Collection<User> findAll() {
        return super.findAll();
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteObject(@PathVariable Long id) {
        super.deleteObject(id);
    }

    @Override
    public void deleteYourAccount(Principal principal) {
        super.deleteObject(getGenericService().findByEmail(principal.getName()).getId());
    }

    @Override
    public ResponseEntity<Boolean> isExist(@PathVariable Long id) {
        return super.isExist(id);
    }

    @Override
    public void logout(Principal principal) {
        if (principal != null) {
            SecurityContextHolder.clearContext();
        }
    }

    @Override
    public User getPrincipal(Principal principal) {
        return super.getAbstractMapper().mapToHttpObject(getGenericService().findByEmail(principal.getName()));
    }

    @Override
    public UserService getGenericService() {
        return (UserService) super.getGenericService();
    }
}