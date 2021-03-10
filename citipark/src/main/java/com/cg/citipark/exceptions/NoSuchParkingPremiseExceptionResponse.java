package com.cg.citipark.exceptions;

public class NoSuchParkingPremiseExceptionResponse {

	private String premiseIdentifier;

	public NoSuchParkingPremiseExceptionResponse(String premiseIdentifier) {
		super();
		this.premiseIdentifier = premiseIdentifier;
	}

	public String getPremiseIdentifier() {
		return premiseIdentifier;
	}

	public void setPremiseIdentifier(String premiseIdentifier) {
		this.premiseIdentifier = premiseIdentifier;
	}
	
	
	
}