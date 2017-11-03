package com.dreamteam.api.service;

import com.amazonaws.services.s3.AmazonS3;
import com.dreamteam.api.config.PasswordConfig;
import com.dreamteam.api.dao.car.BrandDAO;
import com.dreamteam.api.dao.car.CarDAO;
import com.dreamteam.api.dao.car.CarPhotoDAO;
import com.dreamteam.api.dao.user.UserDAO;
import com.dreamteam.api.service.car.RentedCarService;
import com.dreamteam.api.service.email.EmailService;
import org.junit.runner.RunWith;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by JK on 2017-11-02.
 */
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = {ServiceTestConfig.class, PasswordConfig.class})
public abstract class AbstractServiceTest {

    @MockBean
    protected RentedCarService rentedCarService;
    @MockBean
    protected CarDAO carDAO;
    @MockBean
    protected BrandDAO brandDAO;
    @MockBean
    protected CarPhotoDAO carPhotoDAO;
    @MockBean
    protected UserDAO userDAO;
    @MockBean
    protected EmailService emailService;
    @MockBean
    private AmazonS3 amazonS3;

}
