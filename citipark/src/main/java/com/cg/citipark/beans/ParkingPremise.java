package com.cg.citipark.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "parkingpremises")
public class ParkingPremise {

	/**
	 * Auto generated Id for Parking Premise
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long parkingPremiseId;

	private String parkingPremiseName;
	private int numberOfParkingFloors;

	@Column(unique = true, updatable = false)
	private String premiseIdentifier;

//	@OneToOne (targetEntity = Address.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	@JoinColumn(name="address_id")
//	private Address premiseAddress;

	private String city;
	private String state;
	private String pincode;

	/**
	 * Non parameterized constructor for parking premise
	 */
	public ParkingPremise() {

	}

	/**
	 * Parameterized constructor for parking premise
	 * 
	 * @param parkingPremiseId
	 * @param parkingPremiseName
	 * @param numberOfParkingFloors
	 * @param premiseAddress
	 * @param premiseIdentifier
	 */
//	public ParkingPremise(long parkingPremiseId,String parkingPremiseName, int numberOfParkingFloors, Address premiseAddress, String premiseIdentifier) {
//		super();
//		this.parkingPremiseId=parkingPremiseId;
//		this.parkingPremiseName = parkingPremiseName;
//		this.numberOfParkingFloors = numberOfParkingFloors;
//		this.premiseAddress = premiseAddress;
//		this.premiseIdentifier = premiseIdentifier;
//	}

	/**
	 * Getters and setters for parking premise class
	 */

	public long getParkingPremiseId() {
		return parkingPremiseId;
	}

	public ParkingPremise(long parkingPremiseId, String parkingPremiseName, int numberOfParkingFloors,
			String premiseIdentifier, String city, String state, String pincode) {
		super();
		this.parkingPremiseId = parkingPremiseId;
		this.parkingPremiseName = parkingPremiseName;
		this.numberOfParkingFloors = numberOfParkingFloors;
		this.premiseIdentifier = premiseIdentifier;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}

	public void setParkingPremiseId(long parkingPremiseId) {
		this.parkingPremiseId = parkingPremiseId;
	}

	public String getParkingPremiseName() {
		return parkingPremiseName;
	}

	public void setParkingPremiseName(String parkingPremiseName) {
		this.parkingPremiseName = parkingPremiseName;
	}

	public String getPremiseIdentifier() {
		return premiseIdentifier;
	}

	public void setPremiseIdentifier(String premiseIdentifier) {
		this.premiseIdentifier = premiseIdentifier;
	}

	public int getNumberOfParkingFloors() {
		return numberOfParkingFloors;
	}

	public void setNumberOfParkingFloors(int numberOfParkingFloors) {
		this.numberOfParkingFloors = numberOfParkingFloors;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "ParkingPremise [parkingPremiseId=" + parkingPremiseId + ", parkingPremiseName=" + parkingPremiseName
				+ ", numberOfParkingFloors=" + numberOfParkingFloors + ", premiseIdentifier=" + premiseIdentifier
				+ ", city=" + city + ", state=" + state + ", pincode=" + pincode + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((city == null) ? 0 : city.hashCode());
		result = prime * result + numberOfParkingFloors;
		result = prime * result + (int) (parkingPremiseId ^ (parkingPremiseId >>> 32));
		result = prime * result + ((parkingPremiseName == null) ? 0 : parkingPremiseName.hashCode());
		result = prime * result + ((pincode == null) ? 0 : pincode.hashCode());
		result = prime * result + ((premiseIdentifier == null) ? 0 : premiseIdentifier.hashCode());
		result = prime * result + ((state == null) ? 0 : state.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ParkingPremise other = (ParkingPremise) obj;
		if (city == null) {
			if (other.city != null)
				return false;
		} else if (!city.equals(other.city))
			return false;
		if (numberOfParkingFloors != other.numberOfParkingFloors)
			return false;
		if (parkingPremiseId != other.parkingPremiseId)
			return false;
		if (parkingPremiseName == null) {
			if (other.parkingPremiseName != null)
				return false;
		} else if (!parkingPremiseName.equals(other.parkingPremiseName))
			return false;
		if (pincode == null) {
			if (other.pincode != null)
				return false;
		} else if (!pincode.equals(other.pincode))
			return false;
		if (premiseIdentifier == null) {
			if (other.premiseIdentifier != null)
				return false;
		} else if (!premiseIdentifier.equals(other.premiseIdentifier))
			return false;
		if (state == null) {
			if (other.state != null)
				return false;
		} else if (!state.equals(other.state))
			return false;
		return true;
	}

	
}