package com.cg.citipark.repository;
import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cg.citipark.beans.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long>{
	@Query(value = "from Payment p where p.date=:date")
	public List<Payment> getPayments(LocalDate date);

}