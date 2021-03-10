package com.cg.citipark.service;
import java.time.LocalDate;
import java.util.List;

import com.cg.citipark.beans.Payment;
public interface PaymentService {
	public Payment addPayment(Payment payment);
	public Payment getPayment(long paymentId) ;
	public List<Payment> deletePayment(long PaymentId) ;
	public List<Payment> getAllPayments();
	public List<Payment> getPayments(LocalDate date1);

}