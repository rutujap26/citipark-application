package com.cg.citipark.exceptions;

public class DuplicateUserExceptionResponse {
	private String userName;

	public DuplicateUserExceptionResponse(String userName) {
		super();
		this.userName = userName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	
}