package com.cg.citipark;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.citipark.beans.ParkingSlots;
import com.cg.citipark.beans.Payment;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class PaymentControllerTest {
	
	@Autowired
	private TestRestTemplate restTemplate;
	@LocalServerPort
	private int port;
	private Payment payment1,payment2;
	private ParkingSlots ps2;
	private String getRootUrl() {
		return "http://localhost:" + port;
	}
	@BeforeEach
	private void setMockDate() {
		payment1 = new Payment((long) 1,LocalDate.of(2021, 02, 20),300,ps2);
	    payment2 = new Payment((long) 2,LocalDate.of(2021, 02,19),200,ps2);
	    ps2 = new ParkingSlots(6,null, LocalDate.of(2021, 12, 29),"04:00",LocalDate.of(2021,12,29),5, null);
	}
	
	@Test
	public void testAddPayment(){
		
		ResponseEntity<Payment> postResponse = restTemplate.postForEntity(getRootUrl() + "/api/addPayment", payment1,Payment.class);
		assertNotNull(postResponse);

	}
	
	/*@Test
	public void testgetPayment(){
		Payment payment=restTemplate.getForObject(getRootUrl() +"/api/getPayment/2",Payment.class);
		System.out.println(payment.getPaymentId() + " " + payment.getDate() + " "+ payment.getAmountPaid() + " " + payment.getPaymentType() + " " + payment.getPaymentStatus());
		assertNotNull(payment);
	}*/
	@Test
	public void testgetPaymentForInvalid() {
	ResponseEntity<Payment> postResponse2 = restTemplate.getForEntity(getRootUrl()+"/api/getPayment/getByIdentifier/7", Payment.class);
	assertNotNull(postResponse2);
	assertNotNull(postResponse2.badRequest());
	
	}

	

	
	
}