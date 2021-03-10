package com.cg.citipark.controller;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.citipark.beans.Payment;
import com.cg.citipark.service.PaymentService;
@RestController
public class PaymentController {
	@Autowired
	private PaymentService paymentService;
	
	@PostMapping("/api/addPayment")
	public ResponseEntity<Payment> addPayment(@RequestBody Payment payment){
			
		Payment paymentInfo = paymentService.addPayment(payment);
		return new ResponseEntity<Payment>(paymentInfo, HttpStatus.OK);
		
		}
	@GetMapping("/api/getPayment/{id}")
	public ResponseEntity<Payment> getPayment(@PathVariable("id") long paymentId) {
		Payment payment = paymentService.getPayment(paymentId);
		return new ResponseEntity<Payment>(payment, HttpStatus.OK);
	}
	@DeleteMapping("/api/deletePayment/{id}")
	public ResponseEntity<List<Payment>> deletePayment(@PathVariable("id") long paymentId) {
		List<Payment> paymentd = paymentService.deletePayment(paymentId);
		return new ResponseEntity<List<Payment>>(paymentd, HttpStatus.OK);
	}
	@GetMapping("/api/getAllPayments")
	public ResponseEntity<List<Payment>> getAllPayments() {
		List<Payment> payments = paymentService.getAllPayments();
		return new ResponseEntity<List<Payment>>(payments, HttpStatus.OK);
	}
	@GetMapping("/api/getPayments/{date}")
	public ResponseEntity<List<Payment>> getPayments(@PathVariable String date) {
		DateTimeFormatter formatter= DateTimeFormatter.ofPattern("yyyy-MM-d");
		LocalDate date1=LocalDate.parse(date,formatter);
		List<Payment> payment1 = paymentService.getPayments(date1);
		return new ResponseEntity<List<Payment>>(payment1, HttpStatus.OK);		
	}

}