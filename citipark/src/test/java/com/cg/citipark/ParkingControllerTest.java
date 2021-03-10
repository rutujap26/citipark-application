package com.cg.citipark;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.citipark.beans.Address;
import com.cg.citipark.beans.ParkingFloor;
import com.cg.citipark.beans.ParkingPremise;
import com.cg.citipark.beans.ParkingSlots;
import com.cg.citipark.beans.User;
import com.cg.citipark.beans.Vehicle;
import com.cg.citipark.service.ParkingService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = CitiparkApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ParkingControllerTest {
	private Address address1;
	private Vehicle vehicle1;
	private ParkingFloor parkingFloor1;
	private ParkingPremise parkingPremise1;
	private User user1;
	@Autowired
	private TestRestTemplate restTemplate;
	
	@MockBean
	private ParkingService parkingService;
	@LocalServerPort
	private int port;
	
	private String getRootUrl()
	{
		return "http://localhost:" + port;
	}
	
	@BeforeEach
	public void setMockData()
	{
		LocalDate date=LocalDate.now();
		LocalDate pDate= LocalDate.of(2020, 02, 23);
		ParkingSlots pS1=new ParkingSlots(2,null,pDate,"17:00",date,4,null);
		
		LocalDate date1=LocalDate.now();
		LocalDate pDate1= LocalDate.of(2020, 02, 24);
		ParkingSlots pS2=new ParkingSlots(3,null,pDate1,"17:00",date1,5,null);
		
		address1= new Address(1,"mumbai","maharashtra","403401");
		parkingPremise1=new ParkingPremise(1,"Cloud9",5,address1,"P1");
		parkingFloor1=new ParkingFloor(1,"first",10,parkingPremise1);
		user1=new User(1,"Kanishka","Ls","lskanishka@gmail.com","7745027822");
		vehicle1=new Vehicle((long) 1,"GA05A5914","Honda","2008",user1);
		//ParkingSlots parkingSlots1=((new ParkingSlots(1,vehicle1,LocalDate.of(2020, 10, 29),"18:00",LocalDate.now(),5,parkingFloor1)));
	}

	
	@Test
	public void testAddParkingSlot()
	{
		
		ResponseEntity<ParkingSlots> postResponse = restTemplate.postForEntity(getRootUrl() + "/api/bookslot", vehicle1,
				ParkingSlots.class);
		
		assertEquals(postResponse.getStatusCode(),HttpStatus.OK);

	}
	
	
	@Test
	void testSlotsById()
	{
	
		ResponseEntity<ParkingSlots> postResponse1 = restTemplate.getForEntity(getRootUrl()+"/api/getSlotById/3", ParkingSlots.class);
		assertEquals(postResponse1.getStatusCode(),HttpStatus.OK);
	}
	
	@Test
	void testDeleteSlot()
	{
		
		restTemplate.delete(getRootUrl()+"/api/getSlotById/3", ParkingSlots.class);
		ParkingSlots pS2=restTemplate.getForObject(getRootUrl()+"/api/getSlotById/3", ParkingSlots.class);
		assertEquals(null, pS2);
	}
	
	@Test
	void testSlotsByParkingFloorId()
	{
	
		ResponseEntity<ParkingSlots> postResponse1 = restTemplate.getForEntity(getRootUrl()+"/api/getSlotById/1", ParkingSlots.class);
		assertEquals(postResponse1.getStatusCode(),HttpStatus.OK);
	}

	
	
}
