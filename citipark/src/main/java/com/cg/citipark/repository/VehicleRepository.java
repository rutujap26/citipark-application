package com.cg.citipark.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.citipark.beans.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Long>{

}