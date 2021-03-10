package com.cg.citipark.exceptions;

public class ParkingSlotNotAvailableExceptionResponse {
	private String message;

	public ParkingSlotNotAvailableExceptionResponse(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	
	

}
