package com.dreamteam.api.model.bo.user;

import com.dreamteam.api.model.bo.AbstractModel;
import com.dreamteam.api.model.enums.RoleType;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public RoleType getRoleType() {
        return roleType;
    }

    public void setRoleType(RoleType roleType) {
        this.roleType = roleType;
    }

    public String getHashPassword() {
        return hashPassword;
    }

    public void setHashPassword(String hashPassword) {
        this.hashPassword = hashPassword;
    }
}
