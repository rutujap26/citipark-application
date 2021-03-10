package com.cg.citipark.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cg.citipark.beans.ParkingSlots;


public interface ParkingRepository extends JpaRepository<ParkingSlots, Long> {
	
	 
	@Query("from ParkingSlots where parkingDate =:pDate and parkingTime =:pTime")
	 List<ParkingSlots> findSlotsforDateandTime(@Param("pDate") LocalDate parkingDate,
             @Param("pTime") String parkingTime);
	
	
	
	@Query("from ParkingSlots where parking_floor_parking_floor_id =:pId")
	List<ParkingSlots> findByFloor(@Param("pId") int parkingFloorId);

}
	


