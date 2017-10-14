package com.dreamteam.api.model.exception;

/**
 * Created by JK on 2017-10-13.
 */
public class CancelException extends GenericException {
    public CancelException(String message, String code) {
        super(message, code);
    }
}
