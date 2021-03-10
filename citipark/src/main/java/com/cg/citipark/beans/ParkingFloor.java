package com.cg.citipark.beans;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ParkingFloor {

	@Override
	public String toString() {
		return "ParkingFloor [parkingFloorId=" + parkingFloorId + ", floorNumber=" + floorNumber
				+ ", numberOfParkingSlot=" + numberOfParkingSlot + ", parkingPremise=" + parkingPremise + "]";
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int parkingFloorId;	
	private String floorNumber;
	private int numberOfParkingSlot;
	
	@ManyToOne(targetEntity = ParkingPremise.class, cascade = CascadeType.MERGE,  fetch = FetchType.EAGER)
	@JoinColumn(name = "parkingpremise_id")
	private ParkingPremise parkingPremise;
	
	public ParkingFloor() {
		
	}
	public int getParkingFloorId() {
		return parkingFloorId;
	}
	public void setParkingFloorId(int parkingFloorId) {
		this.parkingFloorId = parkingFloorId;
	}
	public String getFloorNumber() {
		return floorNumber;
	}
	public void setFloorNumber(String floorNumber) {
		this.floorNumber = floorNumber;
	}
	public int getNumberOfParkingSlot() {
		return numberOfParkingSlot;
	}
	public void setNumberOfParkingSlot(int numberOfParkingSlot) {
		this.numberOfParkingSlot = numberOfParkingSlot;
	}
	public ParkingPremise getParkingPremise() {
		return parkingPremise;
	}
	public void setParkingPremise(ParkingPremise parkingPremise) {
		this.parkingPremise = parkingPremise;
	}
	public ParkingFloor(int parkingFloorId, String floorNumber, int numberOfParkingSlot,
			ParkingPremise parkingPremise) {
		super();
		this.parkingFloorId = parkingFloorId;
		this.floorNumber = floorNumber;
		this.numberOfParkingSlot = numberOfParkingSlot;
		this.parkingPremise = parkingPremise;
	}
	
	
}
