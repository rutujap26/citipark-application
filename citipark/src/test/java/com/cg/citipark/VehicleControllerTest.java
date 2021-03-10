package com.cg.citipark;

import static org.junit.jupiter.api.Assertions.assertEquals;

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

import com.cg.citipark.beans.ParkingSlots;
import com.cg.citipark.beans.User;
import com.cg.citipark.beans.Vehicle;
import com.cg.citipark.service.VehicleServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = CitiparkApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class VehicleControllerTest {
	private Vehicle vehicle1;
	@Autowired
	private TestRestTemplate restTemplate;
	
	@MockBean
	private VehicleServiceImpl parkingService;
	@LocalServerPort
	private int port;
	private ParkingSlots pS1;
	private String getRootUrl()
	{
		return "http://localhost:" + port;
	}
	@BeforeEach
	public void setMockData()
	{
		vehicle1=new Vehicle((long) 17, " df", "vehicleCompany", "vehicleModel",new User(1,"shreya","sharma","shreya@gmail.com","9960321353"));
		
	}
	
	@Test
	public void testAddVehicle()
	{
		
		ResponseEntity<Vehicle> postResponse = restTemplate.postForEntity(getRootUrl() + "/vehicle/add", vehicle1,
				Vehicle.class);
		System.out.println(pS1);
		//assertNotNull(postResponse);
		assertEquals(postResponse.getStatusCode(),HttpStatus.OK);

	}
	
	@Test
	void testVehicleById()
	{
	
		ResponseEntity<Vehicle> postResponse1 = restTemplate.getForEntity(getRootUrl()+"/vehicle/findVehicle/17", Vehicle.class);
		assertEquals(postResponse1.getStatusCode(),HttpStatus.OK);
	}
}
