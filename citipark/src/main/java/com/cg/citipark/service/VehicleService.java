package com.cg.citipark.service;

import java.util.List;
import java.util.Optional;

import com.cg.citipark.beans.Vehicle;

public interface VehicleService {
	
	/**
	 * This adduserVehicle method will Save the Vehicle in the Database.
	 * 
	 **/
	public Vehicle addUsersVehicle(Vehicle vehicle);
	/**
	 * This removeVehicle method is used to delete the Vehicle in the Database.
	 * 
	 **/
	public Vehicle removeVehicleByVehicleId(long vehicleId);
	
	/**
	 * This findByVehicle method is used to get the Vehicle  by Name in the Database.
	 * 
	 **/
	public Optional<Vehicle  > findByVehicleId(long vehicleId);
	public Optional<Vehicle> findByVehicleNumber(String vehicleNumber,long vehicleId);
	
	/**
	 * This getAllEmployeeDetails method is used to get all the Employees in the Database.
	 * 
	 **/
	public List<Vehicle> findAllVehicles();
	
	/**
	 * This modifyVehicle method is used to Update the Vehicle Which is already present in the Database.
	 * 
	 * */
	public Vehicle modifyVehicle(Vehicle vehicle);
	
}