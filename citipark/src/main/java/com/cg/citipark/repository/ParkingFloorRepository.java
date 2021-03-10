package com.cg.citipark.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.citipark.beans.ParkingFloor;

public interface ParkingFloorRepository extends JpaRepository<ParkingFloor, Integer> {

}
