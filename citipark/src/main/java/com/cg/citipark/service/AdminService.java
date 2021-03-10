package com.cg.citipark.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.citipark.beans.ParkingFloor;
import com.cg.citipark.beans.ParkingPremise;

@Service
public interface AdminService {

	public ParkingPremise createParkingPremise(ParkingPremise parkingPremise);
	
	public List<ParkingPremise> readParkingPremiseByName(String premiseName);
	
	public List<ParkingPremise> readAllParkingPremises();
	
	//public ParkingPremise updateParkingPremise(ParkingPremise parkingPremise);

	ParkingPremise readParkingPremiseByIdentifier(String premiseIdentifier);

	public boolean deleteParkingPremise(String premiseIdentifier);
	/**
	 * Parking Floor
	 */
	
	ParkingFloor createParkingFloor(ParkingFloor floor);

	Iterable<ParkingFloor> fetchingAlleParkingFloor();

	ParkingFloor fetchParkingFloorById(int parkingFloorId);

	String deleteParkingFloorById(int parkingFloorId);

	ParkingFloor updateParkingFloorById(ParkingFloor floor);
}