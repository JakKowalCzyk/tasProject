package com.dreamteam.api.dao.user;

import com.dreamteam.api.dao.ModelDAO;
import com.dreamteam.api.model.bo.user.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDAO extends ModelDAO<User> {

    User findByEmail(String email);

}
