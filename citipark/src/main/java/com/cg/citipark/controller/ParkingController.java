package com.cg.citipark.controller;



import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.citipark.beans.ParkingSlots;
import com.cg.citipark.service.AdminService;
import com.cg.citipark.service.ParkingService;
@RestController			
@CrossOrigin(origins="http://localhost:3000")
public class ParkingController {
	
	@Autowired
	ParkingService parkingService;
	@Autowired
	AdminService adminService;
	
	@PostMapping("/api/bookslot")
	public ResponseEntity<?> bookSlot(@RequestBody ParkingSlots parkingSlot) 
	{
		parkingService.addSlot(parkingSlot);
		return new ResponseEntity<ParkingSlots>(parkingSlot, HttpStatus.OK);
	}
	
	@DeleteMapping("/api/deleteSlotById/{parkingSlotId}")
	public ResponseEntity<String> deleteReportById(@PathVariable Long parkingSlotId)  {
		parkingService.deleteSlot(parkingSlotId);
		return new ResponseEntity<String>("Slot Deleted Successfully", HttpStatus.OK);
	}
	

	@GetMapping("/api/getSlotById/{parkingSlotId}")
	public ResponseEntity<ParkingSlots> getSlotById(@PathVariable Long parkingSlotId)  {
		return new ResponseEntity<ParkingSlots>(parkingService.getSlotById(parkingSlotId), HttpStatus.OK);
	}
	

	@GetMapping("/api/checkAvailability/{parkingDate}/{parkingTime}")
	public ResponseEntity<?> checkAvailability(@PathVariable  String parkingDate, @PathVariable String parkingTime) 
	{
		
		
		DateTimeFormatter formatter= DateTimeFormatter.ofPattern("yyyy-MM-d");
		LocalDate d=LocalDate.parse(parkingDate,formatter);
		return new ResponseEntity<Boolean>(parkingService.checkAvailability(d, parkingTime),HttpStatus.OK);
		
		
	}
	@GetMapping("/api/veiw")
	public ResponseEntity<List<ParkingSlots>> veiwAllSlots()
	{
		return new ResponseEntity<List<ParkingSlots>>(parkingService.findAllSlots(), HttpStatus.OK);
	}
	
	@GetMapping("/api/find/floor/{parkingFloorId}")
	public ResponseEntity<List<ParkingSlots>> getParkingSlotsByFloor(@PathVariable int parkingFloorId)
	{
		
		return new ResponseEntity<List<ParkingSlots>>(parkingService.findSlotsByFloor(parkingFloorId),HttpStatus.OK);
	}
	
	
	
}

