package com.cg.citipark.exceptions;


public class PaymentNotFoundExeptionResponse {
	private  String paymentId;


	public PaymentNotFoundExeptionResponse(String paymentId) {
		super();
		this.paymentId = paymentId;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}


}