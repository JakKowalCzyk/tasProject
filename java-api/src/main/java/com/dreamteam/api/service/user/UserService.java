package com.dreamteam.api.service.user;

import com.dreamteam.api.model.bo.user.User;
import com.dreamteam.api.service.GenericService;

public interface UserService extends GenericService<User> {

    User findByEmail(String email);
}
