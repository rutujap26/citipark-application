package com.cg.citipark;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.citipark.beans.User;
import com.cg.citipark.exceptions.DuplicateUserException;
import com.cg.citipark.exceptions.NoSuchUserFoundException;
import com.cg.citipark.repository.UserRepository;
import com.cg.citipark.service.UserService;
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {
	
	private User user1,user2;
	
	@Autowired
	private UserService userService;
	@MockBean
	private UserRepository userRepository;

	@Before
	public void setUp() throws Exception{
		MockitoAnnotations.initMocks(this);
	}
	@BeforeEach
	void setUpMockData(){
		user1 = new User(200,"Ani","Goyal","ani@gmail.com","9900116666");
		user1 = new User(300,"Anika","Sanghi","anika@gmail.com","9900115555");	
	}

	@Test
	void testAddUserForValidDetails() {
		when(userRepository.save(user1)).thenReturn(user1);
		User result = userService.addUser(user1);
		assertEquals(result.getUserId(),user1.getUserId());
	}
	
	@Test
	void testAddUserForDuplicateUserException() {
		when(userRepository.save(user1)).thenThrow(new DuplicateUserException("User already exist"));
	}	
	
	
	@Test
	public void testForInvalidUserId() {
		when(userRepository.findById(500)).thenThrow(NoSuchUserFoundException.class);
	}
	
	@Test
	public void testForInvalidEmailId() {
		when(userRepository.findByEmail("xyz@gmail.com")).thenThrow(NoSuchUserFoundException.class);
	}
	
	

}