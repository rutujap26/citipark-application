package com.cg.citipark.exceptions;

import com.cg.citipark.beans.ParkingFloor;

public class ParkingFloorCustomException {

	public static void validateFloor(ParkingFloor floor) {
		if (floor.getFloorNumber() == null || floor.getFloorNumber().isEmpty()) {
			throw new IllegalArgumentException("please provide valid FloorNumber");
		}
	}
}
