package com.dreamteam.api.model.bo.user;

import com.dreamteam.api.model.bo.AbstractModel;
import com.dreamteam.api.model.enums.RoleType;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Data
@Entity(name = "user_bo")
public class User extends AbstractModel {

    private String email;
    private String name;
    private String city;
    @Enumerated(EnumType.STRING)
    private RoleType roleType;
    private String hashPassword;

    public User() {
    }

}
