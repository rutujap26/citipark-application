package com.cg.citipark;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.citipark.beans.Address;
import com.cg.citipark.beans.ParkingFloor;
import com.cg.citipark.beans.ParkingPremise;
import com.cg.citipark.beans.ParkingSlots;
import com.cg.citipark.beans.User;
import com.cg.citipark.beans.Vehicle;
import com.cg.citipark.exceptions.ParkingSlotNotAvailableException;
import com.cg.citipark.repository.ParkingRepository;
import com.cg.citipark.service.ParkingService;



@RunWith(SpringRunner.class)
@SpringBootTest
public class ParkingServiceTest {
	
	private ParkingSlots parkingSlots1;
	private ParkingSlots parkingSlots2;
	private Address address1;
	private Vehicle vehicle1;
	private ParkingFloor parkingFloor1;
	private ParkingPremise parkingPremise1;
	private User user1;
	
	@Autowired
	private ParkingService parkingService;
	@MockBean
	private ParkingRepository parkingRepository; 
	
	@BeforeEach
	public void setUpMockData()
	{
		address1= new Address(1,"mumbai","maharashtra","403401");
		parkingPremise1=new ParkingPremise(1,"Cloud9",5,address1,"P1");
		parkingFloor1=new ParkingFloor(1,"first",10,parkingPremise1);
		user1=new User(1,"Kanishka","Ls","lskanishka@gmail.com","7745027822");
		vehicle1=new Vehicle((long) 1,"GA05A5914","Honda","2008",user1);
		parkingSlots1=(new ParkingSlots(1,vehicle1,LocalDate.of(2020, 10, 29),"18:00",LocalDate.now(),5,parkingFloor1));
		
	}
	@Test
	public void testGetSlots()
	{
		when(parkingRepository.findAll()).thenReturn( Stream.of(new ParkingSlots(1,null,LocalDate.of(2021, 10, 8),"18:00",LocalDate.now(),5,null),parkingSlots1,parkingSlots2).collect(Collectors.toList()));
		assertEquals(  3, parkingService.findAllSlots().size());
	}
	
	
	 
	 @Test
	public void testAddSlot()
	 {
		 
			ParkingSlots parkingSlots=new ParkingSlots(2,null,LocalDate.of(2021, 10, 8),"18:00",LocalDate.now(),5,null);
		 when(parkingRepository.save(parkingSlots)).thenReturn(parkingSlots);
		 assertEquals(parkingSlots,parkingService.addSlot(parkingSlots));
	 }
	 
	 
	 @Test
		public void testCheckAvailability() {
			when(parkingRepository.findSlotsforDateandTime(LocalDate.of(2020, 10, 29),"18:00")).thenThrow(new ParkingSlotNotAvailableException("ParkingSlot not avilble"));		
			assertThrows(ParkingSlotNotAvailableException.class, () -> parkingService.checkAvailability(LocalDate.of(2020, 10, 29),"18:00"));
		}
	 
	 @Test
		public void viewSlotByIdTest()  {
			ParkingSlots ps = new ParkingSlots(5,null,LocalDate.of(2021, 11, 29),"04:00",LocalDate.now(),5,null);
			Long slotId = ps.getParkingSlotId();
			Optional<ParkingSlots> slots = Optional.of(ps);

			when(parkingRepository.findById(slotId)).thenReturn(slots);

			Optional<ParkingSlots> newSlot = Optional.of(parkingService.getSlotById(slotId));

			assertEquals(5, newSlot.get().getParkingSlotId());

		}
	 @Test
		public void deleteSlotTest() {
			ParkingSlots ps2 = new ParkingSlots(6,null,LocalDate.of(2021, 12, 29),"04:00",LocalDate.now(),5,null);
			Long slotId=ps2.getParkingSlotId();
			Optional<ParkingSlots> slot = Optional.of(ps2);
			when(parkingRepository.findById(slotId)).thenReturn(slot);
			 parkingService.deleteSlot(slotId);
			verify(parkingRepository, times(1)).deleteById(slotId);
		}
	 
	 
}
