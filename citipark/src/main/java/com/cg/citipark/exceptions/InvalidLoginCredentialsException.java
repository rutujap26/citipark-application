package com.cg.citipark.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidLoginCredentialsException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public InvalidLoginCredentialsException() {
		super();
	}
	
	public InvalidLoginCredentialsException(String errMsg) {
		super(errMsg);
	}

}