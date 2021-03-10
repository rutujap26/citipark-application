package com.cg.citipark.service;

import java.time.LocalDate;
import java.util.List;

import com.cg.citipark.beans.ParkingSlots;

public interface ParkingService {
	public ParkingSlots addSlot(ParkingSlots parkingSlots) ;
	public ParkingSlots deleteSlot(Long parkingSlotId) ;
	public boolean checkAvailability(LocalDate parkingDate, String parkingTime) ;
	public ParkingSlots getSlotById(long parkingSlotId) ;
	public List<ParkingSlots> findAllSlots();
	public List<ParkingSlots>findSlotsByFloor(int parkingFloorId);
}
