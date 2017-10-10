package com.dreamteam.api.model.http;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public abstract class HttpModel {
    private Long id;

    public HttpModel() {
    }

}
