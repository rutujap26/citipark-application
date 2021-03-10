package com.cg.citipark;
//import org.junit.Test;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.citipark.beans.*;
import com.cg.citipark.controller.*;
import com.cg.citipark.exceptions.*;
import com.cg.citipark.repository.*;
import com.cg.citipark.service.*;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@RunWith(SpringRunner.class)
@SpringBootTest
public class PaymentServiceTest {
	private Payment payment1;
	private Payment payment2;
	private Optional<Payment> payment3;
	private ParkingSlots ps2;
	

	@Autowired
	PaymentService paymentService;
	
	@MockBean
	PaymentRepository paymentRepository;
	
	@BeforeEach
	public void setUpMockData()
	{
	    payment1 = new Payment((long)1,LocalDate.of(2021, 02, 20),300,ps2);
	    payment2 = new Payment((long)2,LocalDate.of(2021, 02,19),200,ps2);
	    
	    ps2 = new ParkingSlots(6,null, LocalDate.of(2021, 12, 29),"04:00",LocalDate.of(2021,12,29),5, null);
	}


	@Test
	public void testAddPayment() 
	{   
		Payment payment=new Payment((long)2,LocalDate.of(2021, 10, 8),200,ps2);
		 when(paymentRepository.save(payment)).thenReturn(payment);
		 assertEquals(payment,paymentService.addPayment(payment));
	}

	@Test
	public void testgetAllPayments() {
		when(paymentRepository.findAll()).thenReturn(Stream.of(payment1,payment2).collect(Collectors.toList()));
		assertEquals(2, paymentService.getAllPayments().size());	
	}
	@Test
    public void testgetPayments()
    {	
	LocalDate date = LocalDate.of(2020, 02, 1);
	when(paymentRepository.getPayments(date)).thenReturn(Stream.of(payment2).collect(Collectors.toList()));
	List<Payment> result =paymentService.getPayments(date);
	assertEquals(1,result.size());
    }
	/**@Test
	public void testgetPaymentById() {
	    	long id = 2;
	    	payment3=Optional.of(new Payment((long)2,LocalDate.of(2021, 02,19),200,ps2));
	        when(paymentRepository.findById(id)).thenReturn(payment3);
	        Payment result =paymentService.getPayment(id);
	        assertEquals(payment3,result);
		}
		*/

	
 
	
		
	}