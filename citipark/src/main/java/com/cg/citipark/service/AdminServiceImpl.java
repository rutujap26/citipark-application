package com.cg.citipark.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.citipark.beans.ParkingFloor;
import com.cg.citipark.beans.ParkingPremise;
import com.cg.citipark.exceptions.DuplicateParkingPremiseException;
import com.cg.citipark.exceptions.NoSuchParkingPremiseException;
import com.cg.citipark.exceptions.ParkingFloorCustomException;
import com.cg.citipark.repository.ParkingFloorRepository;
import com.cg.citipark.repository.ParkingPremiseRepository;


@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private ParkingPremiseRepository parkingPremiseRepository;
	@Autowired
	private ParkingFloorRepository parkingFloorRepository;
	
	public AdminServiceImpl(ParkingPremiseRepository parkingPremiseRepository) {
		this.parkingPremiseRepository = parkingPremiseRepository;
	}

	@Override
	public ParkingPremise createParkingPremise(ParkingPremise parkingPremise) {
		try {
			ParkingPremise premise = new ParkingPremise();
			premise.setPremiseIdentifier(parkingPremise.getPremiseIdentifier().toUpperCase());
			premise.setParkingPremiseName(parkingPremise.getParkingPremiseName());
			premise.setNumberOfParkingFloors(parkingPremise.getNumberOfParkingFloors());
//			premise.setPremiseAddress(parkingPremise.getPremiseAddress());
			return parkingPremiseRepository.save(parkingPremise);
		} catch(Exception e) {
			throw new DuplicateParkingPremiseException("Parking Premise with identifier: "+parkingPremise.getPremiseIdentifier()+" is already exists");
		}
	}

	@Override
	public ParkingPremise readParkingPremiseByIdentifier(String premiseIdentifier) {
		ParkingPremise premise = parkingPremiseRepository.findbyPremiseIdentifier(premiseIdentifier);
		if (premise == null) 
			throw new NoSuchParkingPremiseException("Parking Premise with identifier: "+premiseIdentifier+" does not exists");
		return premise;
	}

	@Override
	public List<ParkingPremise> readParkingPremiseByName(String premiseName) {
		List<ParkingPremise> premise = parkingPremiseRepository.findByParkingPremiseName(premiseName);
		if(premise==null || premise.isEmpty())
			throw new NoSuchParkingPremiseException("Parking Premise with name: "+premiseName+" does not exists");
		return premise;
	}

	@Override
	public List<ParkingPremise> readAllParkingPremises() {
		return parkingPremiseRepository.findAll();
	}

//	@Override
//	public ParkingPremise updateParkingPremise(ParkingPremise parkingPremise) {
//		ParkingPremise premise1 = parkingPremiseRepository.findById(parkingPremise.getParkingPremiseId()).get();
//		if(premise1!= null)
//			return parkingPremiseRepository.save(parkingPremise);
//		return null;
//	}
	
	@Override
	public boolean deleteParkingPremise(String premiseIdentifier) {
		ParkingPremise premise = parkingPremiseRepository.findbyPremiseIdentifier(premiseIdentifier.toUpperCase());
		if(premise==null)
			throw new NoSuchParkingPremiseException("Parking Premise with Id: "+premiseIdentifier+" does not exists");
		parkingPremiseRepository.delete(premise);
		return true;
	}
	
	//Parking Floor
		@Override
		public ParkingFloor createParkingFloor(ParkingFloor floor) {
			ParkingFloorCustomException.validateFloor(floor);
			return parkingFloorRepository.save(floor);
		}

		@Override
		public Iterable<ParkingFloor> fetchingAlleParkingFloor() {
			return parkingFloorRepository.findAll();
		}

		@Override
		public ParkingFloor fetchParkingFloorById(int parkingFloorId) {
			Optional<ParkingFloor> parkingFloor = parkingFloorRepository.findById(parkingFloorId);
			if (parkingFloor == null || !parkingFloor.isPresent())
				return null;
			else
				return parkingFloor.get();
		}

		@Override
		public String deleteParkingFloorById(int parkingFloorId) {
			Optional<ParkingFloor> parkingFloor = parkingFloorRepository.findById(parkingFloorId);
			if (parkingFloor == null || !parkingFloor.isPresent())
				return "Data is not present for requested parkingFloorId";
			else {
				parkingFloorRepository.deleteById(parkingFloorId);
				return "successfully deleted datas for requested parkingFloorId";
			}
		}

		@Override
		public ParkingFloor updateParkingFloorById(ParkingFloor floor) {
			ParkingFloor pfloor = parkingFloorRepository.findById(floor.getParkingFloorId()).get();
			return parkingFloorRepository.save(floor);
		}

}