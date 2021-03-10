package com.cg.citipark.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.citipark.beans.Vehicle;
import com.cg.citipark.exceptions.DuplicateVehicleException;
import com.cg.citipark.exceptions.NoSuchVehicleException;
import com.cg.citipark.repository.VehicleRepository;

@Service
public class VehicleServiceImpl implements VehicleService {
	@Autowired
	private VehicleRepository vehicleRepository;
	
	@Override
	public Vehicle addUsersVehicle(Vehicle vehicle)  
	{
		Optional<Vehicle> vehicle2=vehicleRepository.findById(vehicle.getvehicleId());
		if(vehicle2.isPresent())
		{
			throw new DuplicateVehicleException("Already Existing");
		}
		
		return vehicleRepository.save(vehicle);
		
	}
	@Override
	public Vehicle removeVehicleByVehicleId(long vehicleId)  {
		Optional<Vehicle> vehicle2=vehicleRepository.findById(vehicleId);
		if(vehicle2.isPresent())
		{
			vehicleRepository.deleteById(vehicleId);
		}
		else
		{
			throw new NoSuchVehicleException("Vehicle with this Id is not Existing");
		}
		 return vehicle2.get();
		
	}
	@Override
	public Optional<Vehicle> findByVehicleId(long vehicleId) {
		
		Optional<Vehicle> vehicle=vehicleRepository.findById(vehicleId);
		if(vehicle.isPresent())
		{
			return vehicle;		
		}
		else
			
		{
			throw new NoSuchVehicleException("Vehicle with this Id is not Existing");
		}
		
	}
	@Override
	public Optional<Vehicle> findByVehicleNumber(String vehicleNumber,long vehicleId) {
		Optional<Vehicle> vehicle=vehicleRepository.findById(vehicleId);      
		if((vehicle.get().getVehicleNumber()).equals(vehicleNumber))
		{	
		return vehicle;
		}
		
		else
			
		{
			throw new NoSuchVehicleException("Vehicle with this Number is not Existing");
		}
	}
	@Override
	public List<Vehicle> findAllVehicles()
	{
		List<Vehicle> allVehicle = vehicleRepository.findAll(); 
		return allVehicle;
	}
	@Override
	public Vehicle modifyVehicle(Vehicle vehicle) 
	{
		Optional<Vehicle> vehicle1=vehicleRepository.findById(vehicle.getvehicleId());
		if(vehicle1.isPresent()) {
		return vehicleRepository.save(vehicle);
		}
		else
		{
			throw new NoSuchVehicleException("Vehicle with this Id is not Existing");
		}
	}
	
}