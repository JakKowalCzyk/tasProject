package com.dreamteam.api.model.http.user;

import com.dreamteam.api.model.enums.RoleType;
import com.dreamteam.api.model.http.HttpModel;
import lombok.Data;

@Data
public class User extends HttpModel {

    private String email;
    private String name;
    private String city;
    private RoleType roleType;
    private String hashPassword;

    public User() {
    }

}
