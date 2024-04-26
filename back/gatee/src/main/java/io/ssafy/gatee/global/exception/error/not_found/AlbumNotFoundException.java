package io.ssafy.gatee.global.exception.error.not_found;

import io.ssafy.gatee.global.exception.message.ExceptionMessage;

public class AlbumNotFoundException extends Exception {
    public AlbumNotFoundException(ExceptionMessage exceptionMessage) {
        super(exceptionMessage.getMessage());
    }
}