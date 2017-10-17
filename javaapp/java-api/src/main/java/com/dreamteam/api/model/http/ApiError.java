package com.dreamteam.api.model.http;

import lombok.Data;

/**
 * Created by JKowalczyk on 2017-10-11.
 */
@Data
public class ApiError {

    private String faultString;
    private String faultCode;

    public ApiError(String faultString, String faultCode) {
        this.faultString = faultString;
        this.faultCode = faultCode;
    }
}
