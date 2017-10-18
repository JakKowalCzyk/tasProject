package com.dreamteam.api.model.http;

import lombok.Data;

/**
 * Created by JKowalczyk on 2017-10-11.
 */
@Data
public class ApiError {

    private String message;
    private String faultCode;

    public ApiError(String message, String faultCode) {
        this.message = message;
        this.faultCode = faultCode;
    }
}
