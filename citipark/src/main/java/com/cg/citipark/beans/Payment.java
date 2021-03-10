package com.cg.citipark.beans;
import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="payments")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long paymentId;
	@Enumerated(value=EnumType.STRING)
	private PaymentType paymentType;
	private double amountPaid;
	@Enumerated(value=EnumType.STRING)
	private PaymentStatus paymentStatus;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	@OneToOne(targetEntity = ParkingSlots.class, cascade = CascadeType.MERGE)
	private ParkingSlots parkingSlots;
	
	public Payment(Long paymentId,LocalDate date,double amountPaid,ParkingSlots parkingSlots) {
		super();
		this.paymentId=paymentId;
		this.date=date;
		this.amountPaid = amountPaid;
		this.parkingSlots=parkingSlots;
	}
	public Payment() {
		super();
	}
	public long getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(long paymentId) {
		this.paymentId = paymentId;
	}
	public PaymentType getPaymentType() {
		return paymentType;
	}
	public void setPaymentType(PaymentType paymentType) {
		this.paymentType = paymentType;
	}
	public double getAmountPaid() {
		return amountPaid;
	}
	public void setAmountPaid(double amountPaid) {
		this.amountPaid = amountPaid;
	}
	public PaymentStatus getPaymentStatus() {
		return paymentStatus;
	}
	public void setPaymentStatus(PaymentStatus paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	public ParkingSlots getParkingSlots() {
		return parkingSlots;
	}
	public void setParkingSlots(ParkingSlots parkingSlots) {
		this.parkingSlots = parkingSlots;
	}
	@Override
	public String toString() {
		return "Payment [paymentId=" + paymentId + ", paymentType=" + paymentType + ", amountPaid=" + amountPaid
				+ ", paymentStatus=" + paymentStatus + ", date=" + date + ", parkingSlots=" + parkingSlots + "]";
	}
	

}