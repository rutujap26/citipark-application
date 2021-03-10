package com.cg.citipark.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.citipark.beans.Vehicle;
import com.cg.citipark.service.VehicleServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/vehicle")
public class VehicleController {
	
	@Autowired
	private VehicleServiceImpl vehicleService;
	
	@PostMapping("/add")
	public ResponseEntity<Vehicle> addNewUser(@RequestBody Vehicle vehicle)  {
		Vehicle vehi = vehicleService.addUsersVehicle(vehicle);
		return new ResponseEntity<Vehicle>(vehi, HttpStatus.OK);
	}
	
	@GetMapping("/veiw")
	public ResponseEntity<List<Vehicle>> veiwAllVehicle()
	{
		return new ResponseEntity<List<Vehicle>>(vehicleService.findAllVehicles(), HttpStatus.OK);
	}
	@DeleteMapping("/deleteById/{vehicleId}")
	public ResponseEntity<?> deleteVehicleById(@PathVariable Long vehicleId) 
	{
		vehicleService.removeVehicleByVehicleId(vehicleId);		
		return new ResponseEntity<String>("Report Deleted Successfully", HttpStatus.OK);	
	}
	
	@GetMapping("/findVehicle/{vehicleId}")
	public ResponseEntity<?> findVehicleById(@PathVariable Long vehicleId)
	{
		Optional<Vehicle> vehicle= vehicleService.findByVehicleId(vehicleId);
		return new ResponseEntity<Optional<Vehicle>>(vehicle, HttpStatus.OK);	
	}
	
	@GetMapping("/findVehicleByNumber/{vehicleNumber}/{vehicleId}")
	public ResponseEntity<?> findVehicleByNumber(@PathVariable String vehicleNumber ,Long vehicleId)
	{
		Optional<Vehicle> vehicle=vehicleService.findByVehicleNumber(vehicleNumber,vehicleId);
		return new ResponseEntity<Optional<Vehicle>>(vehicle,HttpStatus.OK);	
	}
	
	@PutMapping("/modifyTheVehicle")
	public ResponseEntity<?> modifyVehicle(@RequestBody Vehicle vehicle) {
		vehicleService.modifyVehicle(vehicle);
		return new ResponseEntity<Vehicle>(vehicle, HttpStatus.OK);
	}
	

}