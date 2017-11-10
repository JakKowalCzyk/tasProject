package com.dreamteam.api.service.security;

import org.springframework.security.core.Authentication;

/**
 * Created by JKowalczyk on 2017-11-10.
 */
public interface SecurityService {

    boolean isAllowedToUpdateUser(Long userId, Authentication authentication);

}
