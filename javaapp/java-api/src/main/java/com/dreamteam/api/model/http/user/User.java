package com.dreamteam.api.model.http.user;

import com.dreamteam.api.model.enums.RoleType;
import com.dreamteam.api.model.http.HttpModel;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.hibernate.validator.constraints.Email;

@Data
public class User extends HttpModel {

    @Email
    private String email;
    private String name;
    private String city;
    private RoleType roleType;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String hashPassword;

    public User() {
    }

}
