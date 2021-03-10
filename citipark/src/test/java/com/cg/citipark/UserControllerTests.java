package com.cg.citipark;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.citipark.beans.User;
import com.cg.citipark.service.UserService;
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class UserControllerTests {
	

	@Autowired
	private TestRestTemplate restTemplate;
	@LocalServerPort
	private int port;
	@MockBean
	private UserService userService;
	private User user1,user2;
	
	private String getRootUrl()
	{
		return "http://localhost:"+port;
	}
	@BeforeEach
	void setUpMockData(){
		MockitoAnnotations.initMocks(this);
		user1 = new User(200,"Ani","Goyal","ani@gmail.com","9900116666");
		user2 = new User(300,"Anika","Sanghi","anika@gmail.com","9900115555");	
	}

	@Test
	public void testAddUser() {
		ResponseEntity<User> postResponse = restTemplate.postForEntity(getRootUrl()+"/api/adduser", user2, User.class);
		assertEquals(HttpStatus.OK, postResponse.getStatusCode());
	}
	
	@Test
	public void testFindUserById()
	{
		ResponseEntity<User> postResponse = restTemplate.getForEntity(getRootUrl()+"/user/getUserById/300", User.class);	
		assertEquals(HttpStatus.OK ,postResponse.getStatusCode());
	}
	
	@Test
	public void testFindUserByIdForInvalidId() {
		ResponseEntity<User> postResponse2 = restTemplate.getForEntity(getRootUrl()+"/user/getUserById/1000", User.class);
		assertNotNull(postResponse2);
		assertNotNull(postResponse2.badRequest());
	}
	
	
	@Test
	public void testFindUserByEmail()
	{
		ResponseEntity<User> postResponse = restTemplate.getForEntity(getRootUrl()+"/user/getUserByEmail/ani@gmail.com", User.class);	
		assertEquals(HttpStatus.OK ,postResponse.getStatusCode());
	}
	
	@Test
	public void testFindUserByEmailForInvalidId() {
		ResponseEntity<User> postResponse2 = restTemplate.getForEntity(getRootUrl()+"/user/getUserByEmail/pqr@gmail.com", User.class);
		assertNotNull(postResponse2);
		assertNotNull(postResponse2.badRequest());
	}
	
}