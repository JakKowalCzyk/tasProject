package com.dreamteam.api.controller.user;

import com.dreamteam.api.controller.GenericController;
import com.dreamteam.api.model.http.user.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collection;

@Api(tags = "User API", description = "services for user")
@RequestMapping(value = "/api/user")
public interface UserController extends GenericController<User> {

    @Override
    @GetMapping(value = "/{id}")
    User getObject(@PathVariable Long id);

    @Override
    @PutMapping
    User updateObject(@RequestBody User model);

    @Override
    @PostMapping
    User addObject(@RequestBody User model);

    @Override
    @GetMapping(value = "/")
    Collection<User> findAll();

    @Override
    @DeleteMapping(value = "/{id}")
    void deleteObject(@PathVariable Long id);

    @ApiOperation("Delete Your account")
    @DeleteMapping(value = "/me")
    void deleteYourAccount(Principal principal);

    @Override
    @RequestMapping(value = "/{id}", method = RequestMethod.HEAD)
    ResponseEntity<Boolean> isExist(@PathVariable Long id);

    @GetMapping(value = "/logout")
    void logout(Principal principal);

    @GetMapping(value = "/me")
    User getPrincipal(Principal principal);

    @PutMapping(value = "/{id}/admin")
    User setAdminToUser(@PathVariable Long id);
}
