package com.dreamteam.api.controller.user;

import com.dreamteam.api.controller.GenericController;
import com.dreamteam.api.model.http.user.User;
import io.swagger.annotations.Api;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@Api(tags = "User API", description = "services for user")
@RequestMapping(value = "/api/user")
public interface UserController extends GenericController<User> {

    @Override
    @GetMapping(value = "/")
    User getObject(@PathVariable Long id);

    @Override
    @PutMapping
    User updateObject(@RequestBody User model);

    @Override
    User addObject(@RequestBody User model);

    @Override
    Collection<User> findAll();

    @Override
    void deleteObject(@PathVariable Long id);

    @Override
    ResponseEntity<Boolean> isExist(@PathVariable Long id);
}
