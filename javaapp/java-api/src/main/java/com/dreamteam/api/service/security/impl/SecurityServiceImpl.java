package com.dreamteam.api.service.security.impl;

import com.dreamteam.api.model.enums.RoleType;
import com.dreamteam.api.service.security.SecurityService;
import com.dreamteam.api.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

/**
 * Created by JKowalczyk on 2017-11-10.
 */
@Component
public class SecurityServiceImpl implements SecurityService {

    @Autowired
    private UserService userService;

    @Override
    public boolean isAllowedToUpdateUser(Long userId, Authentication authentication) {
        return isAdmin(authentication) || isGivenUser(userId, authentication);
    }

    private boolean isGivenUser(Long userId, Authentication authentication) {
        return userService.findByEmail(authentication.getName()).getId().equals(userId);
    }

    private boolean isAdmin(Authentication authentication) {
        return authentication.getAuthorities().stream().anyMatch(o -> o.getAuthority().equals(RoleType.ROLE_ADMIN.name()));
    }
}
