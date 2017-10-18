package com.dreamteam.api.model.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by JKowalczyk on 2017-10-11.
 */
@ResponseStatus(HttpStatus.CONFLICT)
public class UserEmailException extends GenericException {

    public UserEmailException(String message) {
        super(String.format("Email: %s is already being used", message), "EMAIL_ERROR");
    }
}
