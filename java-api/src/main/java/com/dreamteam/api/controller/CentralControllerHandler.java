package com.dreamteam.api.controller;

import com.dreamteam.api.model.exception.GenericException;
import com.dreamteam.api.model.exception.UserEmailException;
import com.dreamteam.api.model.http.ApiError;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindException;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.beans.PropertyEditorSupport;
import java.sql.Timestamp;
import java.util.List;
import java.util.Locale;

/**
 * Created by JKowalczyk on 2017-10-11.
 */
@ControllerAdvice
public class CentralControllerHandler {
    final static private Logger logger = LoggerFactory.getLogger(CentralControllerHandler.class);

    @InitBinder
    public void binder(WebDataBinder binder) {
        binder.registerCustomEditor(Timestamp.class, new PropertyEditorSupport() {
            @Override
            public void setAsText(String value) {
                setValue(new Timestamp(Long.parseLong(value)));
            }
        });
    }

    @ExceptionHandler({BindException.class})
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiError bindException(BindException e, Locale locale) {
        List<ObjectError> allErrors = e.getAllErrors();
        ObjectError error = allErrors.get(0);
        logError(e);
        String type = StringUtils.substringBefore(error.getDefaultMessage(), "|");
        String message = StringUtils.substringAfter(error.getDefaultMessage(), "|");

        return new ApiError(message, type);
    }

    @ExceptionHandler({ValidationException.class})
    @ResponseBody
    @ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
    public ApiError validationException(ValidationException e, Locale locale) {
        logError(e);
        return new ApiError(e.getMessage(), "REQUEST_ARGUMENTS_NOT_VALID");
    }

    @ExceptionHandler({MissingServletRequestParameterException.class})
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiError missingServletRequestParameterException(MissingServletRequestParameterException e, Locale locale) {
        logError(e);
        return new ApiError(e.getMessage(), "ERR_API_REQUEST");
    }

    @ExceptionHandler({Exception.class})
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiError exception(Exception e, Locale locale) {
        logError(e);
        return new ApiError(String.format("%s: %s", e.getClass().getName(), e.getMessage() != null ? e.getMessage().trim() : ""), "ERR_SERVER");
    }

    // Data Modeler Exceptions ------------------------------------------------

    @ExceptionHandler({GenericException.class})
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiError komisException(GenericException e, Locale locale) {
        logError(e);
        return new ApiError(e.getMessage(), e.getCode());
    }

    @ExceptionHandler({UserEmailException.class})
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiError cannotStartExportException(UserEmailException e, Locale locale) {
        logError(e);
        return new ApiError(e.getMessage(), e.getCode());
    }

    public <T extends Exception> void logError(T e) {
        logger.error(String.format("%s: %s", e.getClass().getSimpleName(), e.getMessage()));
    }

}
