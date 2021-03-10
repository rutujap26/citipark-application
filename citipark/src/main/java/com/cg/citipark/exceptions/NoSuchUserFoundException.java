package com.cg.citipark.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class NoSuchUserFoundException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public NoSuchUserFoundException() {
		super();
	}
	
	public NoSuchUserFoundException(String errMsg) {
		super(errMsg);
	}


}