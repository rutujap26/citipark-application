package com.cg.citipark;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cg.citipark.beans.User;
import com.cg.citipark.beans.Vehicle;
import com.cg.citipark.exceptions.DuplicateVehicleException;
import com.cg.citipark.exceptions.NoSuchVehicleException;
import com.cg.citipark.repository.VehicleRepository;
import com.cg.citipark.service.VehicleService;

@SpringBootTest
public class VehicleServiceTest {
	private Vehicle vehiclemock1;
	private Vehicle vehiclemock2;
	@Autowired
	private VehicleService vehicleService;
	@MockBean
	private VehicleRepository vehicleRepository;	
	@Test
	public void testAddUserVehicle() {
		vehiclemock1=new Vehicle((long) 17, " df", "vehicleCompany", "vehicleModel",new User(1,"shreya","sharma","shreya@gmail.com","9960321353"));
		when(vehicleRepository.save(vehiclemock1)).thenReturn(vehiclemock1);
		Vehicle result=vehicleService.addUsersVehicle(vehiclemock1);
		assertEquals(result.getVehiclId(), vehiclemock1.getVehiclId());
	}
	@Test
	public void testAddUserVehicleForDuplicateVehicleException()
	{
		
		vehiclemock1=new Vehicle((long) 17,"Tn42","Toyato","2012",null);
		when(vehicleRepository.save(vehiclemock1)).thenThrow(new DuplicateVehicleException("No Such Vehicle Found"));
		assertThrows(DuplicateVehicleException.class, ()-> vehicleService.addUsersVehicle(vehiclemock1));
	}
	
	@Test
	public void testVeiwAllVehicles() {
		vehiclemock1=new Vehicle((long) 15,"Tn38","Honda","2020",null);
		vehiclemock2=new Vehicle((long) 19,"Tn42","Toyato","2012",null);
		when(vehicleRepository.findAll()).thenReturn(Stream.of(vehiclemock1,vehiclemock2).collect(Collectors.toList()));
		assertEquals(2, vehicleService.findAllVehicles().size());	
	}
	
	@Test
	public void testVeiwAllVehiclesForNoSuchVehicleException(){
		when(vehicleRepository.findAll()).thenThrow(new NoSuchVehicleException("No Such Vehicle Found"));
		assertThrows(NoSuchVehicleException.class, () -> vehicleService.findAllVehicles());
	}


}
