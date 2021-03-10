package com.cg.citipark.service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.citipark.beans.Payment;
import com.cg.citipark.beans.PaymentStatus;
import com.cg.citipark.exceptions.PaymentNotFoundException;
import com.cg.citipark.repository.PaymentRepository;
@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
	@Autowired
	private PaymentRepository paymentRepository;
	
	@Override
	public Payment addPayment(Payment payment) {
		double base_price=50;
		double amount=base_price*payment.getParkingSlots().getParkingDuration();
		if(payment.getAmountPaid()<amount)
		{
			payment.setPaymentStatus(PaymentStatus.CANCELLED);
		}
		else if(payment.getAmountPaid()==amount )
		{
			payment.setPaymentStatus(PaymentStatus.CONFIRMED);
		}
		else
		{
			payment.setPaymentStatus(PaymentStatus.BALANCE_RTURNED);
		}
		return paymentRepository.save(payment);
	}
	
	@Override
	public Payment getPayment(long paymentId) throws PaymentNotFoundException{
		Optional<Payment> optional=paymentRepository.findById(paymentId);
		if(!optional.isPresent())
			throw new PaymentNotFoundException("Payment Details not found for id "+paymentId);	
		return optional.get();
	}
	@Override
	public List<Payment> deletePayment(long paymentId) throws PaymentNotFoundException{
		Optional<Payment> optional= paymentRepository.findById(paymentId);
		if(!optional.isPresent())		 
			throw new PaymentNotFoundException("Payment Details not found for id "+paymentId);
		else{
			Payment payment = paymentRepository.findById(paymentId).get();
			paymentRepository.delete(payment);
			return getAllPayments();
		}
	}
	
	@Override
	public List<Payment> getAllPayments() {
		return paymentRepository.findAll();
	}
	@Override
	public List<Payment> getPayments(LocalDate date) {
		return paymentRepository.getPayments(date);
	}

	
	
}