package com.cg.citipark;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.citipark.beans.Address;
import com.cg.citipark.beans.ParkingFloor;
import com.cg.citipark.beans.ParkingPremise;
import com.cg.citipark.exceptions.DuplicateParkingPremiseException;
import com.cg.citipark.exceptions.NoSuchParkingPremiseException;
import com.cg.citipark.repository.ParkingFloorRepository;
import com.cg.citipark.repository.ParkingPremiseRepository;
import com.cg.citipark.service.AdminService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminServiceTest {

	@Autowired
	AdminService adminService;
	
	@MockBean
	ParkingPremiseRepository parkingPremiseRepository;
	@MockBean
	ParkingFloorRepository parkingFloorRepository;
	
	
	@Before
	public void setUp() throws Exception{
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void testForParkingPremise() {
		Address address = new Address(1,"pune", "MH", "411006");
		ParkingPremise parkingPremise = new ParkingPremise(1,"pre1", 2, address, "P1");
		when(parkingPremiseRepository.save(parkingPremise)).thenReturn(parkingPremise);
		assertEquals(parkingPremise, adminService.createParkingPremise(parkingPremise));
	}
	
	@Test
	public void testForDuplicateParkingPremise() {
		Address address = new Address(1,"pune", "MH", "411006");
		ParkingPremise premise = new ParkingPremise(2,"pre1", 2, address, "P1");
		when(parkingPremiseRepository.save(premise)).thenThrow(DuplicateParkingPremiseException.class);
	}
	
	@Test
	public void testForValidParkingPremiseIdentifier() {
		Address address = new Address(1,"pune", "MH", "411006");
		ParkingPremise premise = new ParkingPremise(3,"pre2", 3, address, "P1");
		when(parkingPremiseRepository.findbyPremiseIdentifier("P1")).thenReturn(new ParkingPremise(3,"pre2", 3, address, "P1"));
		assertEquals(premise, adminService.readParkingPremiseByIdentifier("P1"));
	}
	
	@Test
	public void testForInvalidParkingPremiseIdentifier() {
		when(parkingPremiseRepository.findbyPremiseIdentifier("P1")).thenThrow(NoSuchParkingPremiseException.class);
	}
	
	@Test
	public void testForValidParkingPremiseName() {
		Address address = new Address(1,"pune", "MH", "411006");
		when(parkingPremiseRepository.findByParkingPremiseName("pre1")).thenReturn(Stream.of(new ParkingPremise(6,"pre1", 1, address, "P2"), new ParkingPremise(7,"pre1", 5, address, "P3")).collect(Collectors.toList()));
		assertEquals(2, adminService.readParkingPremiseByName("pre1").size());
	}
	
	@Test
	public void testForInvalidParkingPremiseName() {
		when(parkingPremiseRepository.findByParkingPremiseName("pre1")).thenThrow(NoSuchParkingPremiseException.class);
	}
	
	@Test
	public void testForGetAllParkingPremises() {
		Address address = new Address(1,"pune", "MH", "411006");
		when(parkingPremiseRepository.findAll()).thenReturn(Stream.of(new ParkingPremise(8,"pre1", 2, address, "P1"), new ParkingPremise(9,"pre2", 4, address, "P2")).collect(Collectors.toList()));
		assertEquals(2, adminService.readAllParkingPremises().size());
	}
	
	
	
	
	//ParkingFloor
	@Test
	public void testAddParkingFloor() {
		Address address = new Address(1,"pune", "MH", "411006");
		ParkingPremise premise = new ParkingPremise(4,"pre1", 3, address, "P1");
		ParkingFloor floor = new ParkingFloor(5, "first", 4, premise);
		when(parkingFloorRepository.save(floor)).thenReturn(floor);
		assertEquals(floor, adminService.createParkingFloor(floor));
	}
	@Test
	public void testFetchAllParkingFloors() {
		Address address = new Address(2,"pune", "MH", "411006");
		ParkingPremise premise = new ParkingPremise(4,"pre1", 3, address, "P1");
		ParkingFloor floor1 = new ParkingFloor(5, "first", 4, premise);
		ParkingFloor floor2 = new ParkingFloor(6, "second", 6, premise);	
 		when(parkingFloorRepository.findAll()).thenReturn(Stream.of(floor1, floor2).collect(Collectors.toList()));
 		assertEquals(2, ((List<ParkingFloor>) adminService.fetchingAlleParkingFloor()).size());
	
	}
	@Test
	public void testFetchParkingFloorById() {
		Address address = new Address(5,"pune", "MH", "411006");
		ParkingPremise premise = new ParkingPremise(4,"pre1", 3, address, "P1");
		Optional<ParkingFloor> floor = Optional.of(new ParkingFloor(5, "first", 4, premise));
		when(parkingFloorRepository.findById(5)).thenReturn(floor);
		
	}
	
	@Test
	public void testForUpdateParkingFloor() {
		Address address = new Address(6,"pune", "MH", "411006");
		ParkingPremise premise = new ParkingPremise(4,"pre1", 3, address, "P1");
		ParkingFloor floor = new ParkingFloor(5, "second", 4, premise);
		when(parkingFloorRepository.save(floor)).thenReturn(floor);
}
}
