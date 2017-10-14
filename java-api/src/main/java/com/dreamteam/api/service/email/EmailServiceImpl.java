package com.dreamteam.api.service.email;

import com.dreamteam.api.model.bo.car.RentedCar;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;

/**
 * Created by JK on 2017-10-13.
 */
@Service
public class EmailServiceImpl implements EmailService {
    public static final String SUBJECT_FINISH = "Car rent finished";
    public static final String SUBJECT_PLANNED = "Car rent planned";
    public static final String SUBJECT_STARTED = "Car rent started";
    public static final String SUBJECT_CANCEL = "Car rent cancelled";
    private final org.slf4j.Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private JavaMailSender javaMailSender;

    @Async
    @Override
    public void sendEmailAboutFinishedRent(RentedCar rentedCar) {
        String body = String.format("Your car's rent has been finished \n Your car: %s %s " +
                "\n Total price: %s \n Please pay by clicking here: www.zaplac.cin", rentedCar.getCar().getBrand().getName(), rentedCar.getCar().getName(), rentedCar.getTotalPrice());
        sendEmail(SUBJECT_FINISH, rentedCar.getUser().getEmail(), body);
    }

    @Async
    @Override
    public void sendEmailAboutScheduledRent(RentedCar rentedCar) {
        String body = String.format("Your car's rent will start at %s \n To get Your car please visit as at this day \n Your car: %s %s\n Total price: %s " +
                "\n Your rent is going to finish at %s", rentedCar.getFrom(), rentedCar.getCar().getBrand().getName(), rentedCar.getCar().getName(), rentedCar.getTotalPrice(), rentedCar.getTo());
        sendEmail(SUBJECT_PLANNED, rentedCar.getUser().getEmail(), body);
    }

    @Async
    @Override
    public void sendEmailAboutStartedRent(RentedCar rentedCar) {
        String body = String.format("Your car's rent started today \n Please visit us today \n Your car: %s %s \n Total price: %s " +
                "\n Your rent is going to finish at %s", rentedCar.getCar().getBrand().getName(), rentedCar.getCar().getName(), rentedCar.getTotalPrice(), rentedCar.getTo());
        sendEmail(SUBJECT_STARTED, rentedCar.getUser().getEmail(), body);
    }

    @Override
    public void sendEmailAboutCancellation(RentedCar rentedCar) {
        String body = String.format("Your car's rent has been cancelled \n Your car: %s %s ", rentedCar.getCar().getBrand().getName(), rentedCar.getCar().getName());
        sendEmail(SUBJECT_CANCEL, rentedCar.getUser().getEmail(), body);
    }


    private void sendEmail(String subject, String email, String body) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
        try {
            mimeMessageHelper.setTo(email);
            mimeMessageHelper.setSubject(subject);
            mimeMessageHelper.setText(body);
            javaMailSender.send(mimeMessage);
            logger.info(String.format("SENT EMAIL TO: : %s", email));
        } catch (Exception e) {
            logger.error(e.getMessage());
            logger.error(String.format("CANNOT SEND EMAIL TO: %s", email));
        }
    }
}
