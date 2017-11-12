package com.dreamteam.api.service.user;

import com.dreamteam.api.model.bo.user.User;
import com.dreamteam.api.service.GenericService;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends GenericService<User>, UserDetailsService {

    User findByEmail(String email);

    User setAdminToUser(Long id);

    User setUserToAdmin(Long id);
}
