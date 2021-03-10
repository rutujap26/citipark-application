package com.cg.citipark.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "VehiclesTable")
public class Vehicle {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long vehicleId;
	
	private String vehicleNumber;
	private String vehicleType;
	private String vehicleCompany;
	private String vehicleModel;
	
	
	
	public long getvehicleId() {
		return vehicleId;
	}
	public void setvehicleId(long vehicleId) {
		this.vehicleId = vehicleId;
	}
	public String getVehicleNumber() {
		return vehicleNumber;
	}
	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}
	public String getVehicleType() {
		return vehicleType;
	}
	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}
	public String getVehicleCompany() {
		return vehicleCompany;
	}
	public void setVehicleCompany(String vehicleCompany) {
		this.vehicleCompany = vehicleCompany;
	}
	public String getVehicleModel() {
		return vehicleModel;
	}
	public void setVehicleModel(String vehicleModel) {
		this.vehicleModel = vehicleModel;
	}
	public Vehicle() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Vehicle(long vehicleId, String vehicleNumber, String vehicleType, String vehicleCompany,
			String vehicleModel) {
		super();
		this.vehicleId = vehicleId;
		this.vehicleNumber = vehicleNumber;
		this.vehicleType = vehicleType;
		this.vehicleCompany = vehicleCompany;
		this.vehicleModel = vehicleModel;
	}
	
	
}