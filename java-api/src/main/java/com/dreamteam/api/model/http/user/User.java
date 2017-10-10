package com.dreamteam.api.model.http.user;

import com.dreamteam.api.model.http.HttpModel;

public class User extends HttpModel {

    private String email;
    private String name;
    private String city;

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
}
