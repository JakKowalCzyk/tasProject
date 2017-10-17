package com.dreamteam.api.model.exception;

/**
 * Created by JK on 2017-10-13.
 */
public class EmailException extends GenericException {

    public EmailException(String message, String code) {
        super(message, code);
    }
}
