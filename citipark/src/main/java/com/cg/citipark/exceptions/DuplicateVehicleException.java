package com.cg.citipark.exceptions;

public class DuplicateVehicleException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public DuplicateVehicleException(String message) {
		super(message);
	}
}
