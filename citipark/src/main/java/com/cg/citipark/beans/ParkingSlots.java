package com.cg.citipark.beans;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class ParkingSlots {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long parkingSlotId;
	//@JsonFormat(pattern="yyyy-MM-dd")
	private LocalDate parkingDate;
	private String parkingTime;
	@JsonFormat(pattern="yyyy-MM-dd")
	private LocalDate bookingDate;
	private int parkingDuration;
	@OneToOne(targetEntity=Vehicle.class)
	@JoinColumn(name="vehicl_id")
	private Vehicle vehicle;
	/*@ManyToOne(targetEntity = ParkingFloor.class, cascade = CascadeType.MERGE)
	private ParkingFloor parkingFloor;*/
	
	public long getParkingSlotId() {
		return parkingSlotId;
	}
	public void setParkingSlotId(long parkingSlotId) {
		this.parkingSlotId = parkingSlotId;
	}
	public LocalDate getParkingDate() {
		return parkingDate;
	}
	public void setParkingDate(LocalDate parkingDate) {
		this.parkingDate = parkingDate;
	}
	public String getParkingTime() {
		return parkingTime;
	}
	public void setParkingTime(String parkingTime) {
		this.parkingTime = parkingTime;
	}
	public LocalDate getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}
	public int getParkingDuration() {
		return parkingDuration;
	}
	public void setParkingDuration(int parkingDuration) {
		this.parkingDuration = parkingDuration;
	}
	
	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}
	public Vehicle getVehicle() {
		return vehicle;
	}
	/*public ParkingFloor getParkingFloor() {
		return parkingFloor;
	}
	public void setParkingFloor(ParkingFloor parkingFloor) {
		this.parkingFloor = parkingFloor;
	}*/
	
	
	
	public ParkingSlots() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	/*public ParkingSlots(long parkingSlotId, Vehicle vehicle, LocalDate parkingDate, String parkingTime,
			LocalDate bookingDate, int parkingDuration, ParkingFloor parkingFloor) {
		super();
		this.parkingSlotId = parkingSlotId;
		//this.vehicle = vehicle;
		this.parkingDate = parkingDate;
		this.parkingTime = parkingTime;
		this.bookingDate = bookingDate;
		this.parkingDuration = parkingDuration;
		//this.parkingFloor = parkingFloor;
	}*/
	public ParkingSlots(long parkingSlotId, LocalDate parkingDate, String parkingTime, Vehicle vehicle,LocalDate bookingDate,
			int parkingDuration) {
		super();
		this.parkingSlotId = parkingSlotId;
		this.parkingDate = parkingDate;
		this.parkingTime = parkingTime;
		this.bookingDate = bookingDate;
		this.parkingDuration = parkingDuration;
		this.vehicle=vehicle;
	}
	@PrePersist
	public void onCreate()
	{
		this.bookingDate=LocalDate.now();
		
	}
	@PreUpdate
	public void onUpdate()
	{
		this.bookingDate=LocalDate.now();
		
	}
	@Override
	public String toString() {
		return "ParkingSlots [parkingSlotId=" + parkingSlotId + ", parkingDate=" + parkingDate + ", parkingTime="
				+ parkingTime + ", bookingDate=" + bookingDate + ", parkingDuration=" + parkingDuration + "]";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
//	
//	@Override
//	public String toString() {
//		return "ParkingSlots [parkingSlotId=" + parkingSlotId + ", vehicle=" + vehicle + ", parkingDate=" + parkingDate
//				+ ", parkingTime=" + parkingTime + ", bookingDate=" + bookingDate + ", parkingDuration="
//				+ parkingDuration + ", parkingFloor=" + parkingFloor + "]";
//	}
	
	
	
}
