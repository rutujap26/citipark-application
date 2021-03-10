package com.cg.citipark.exceptions;

public class NoSuchVehicleException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public NoSuchVehicleException(String message) {
		super(message);
	}
}
