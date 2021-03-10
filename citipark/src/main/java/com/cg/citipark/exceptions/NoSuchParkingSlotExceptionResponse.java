package com.cg.citipark.exceptions;

public class NoSuchParkingSlotExceptionResponse {
	String message;

	public NoSuchParkingSlotExceptionResponse(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	

}
