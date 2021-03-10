package com.cg.citipark.exceptions;

public class NoSuchVehicleExceptionResponse {
	
	
	public NoSuchVehicleExceptionResponse(String message) {
		super();
		this.message = message;
	}

	private String message;

	public String getMessage() {
		return message;
	}
	
	
	

}
