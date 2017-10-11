package com.dreamteam.api.model.exception;

/**
 * Created by JKowalczyk on 2017-10-11.
 */
public class GenericException extends RuntimeException {

    private String code;

    public GenericException(String message, String code) {
        super(message);
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
