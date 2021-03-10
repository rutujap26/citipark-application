package com.cg.citipark.exceptions;

public class ParkingSlotNotAvailableException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ParkingSlotNotAvailableException(String message) {
		super(message);
	}
}
