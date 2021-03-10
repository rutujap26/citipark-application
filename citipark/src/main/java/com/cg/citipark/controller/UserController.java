package com.cg.citipark.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.citipark.beans.User;
import com.cg.citipark.service.MapValidationErrorService;
import com.cg.citipark.service.UserService;

@RestController	
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private MapValidationErrorService mapValidationErrorService;
	/*
	 * Register user 
	 */
	@PostMapping("/api/adduser")
	public ResponseEntity<?> addUser(@RequestBody User user,BindingResult result)
	{
		ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationError(result);
		if (errorMap != null) 
			return errorMap;
		User registerUser = userService.addUser(user);
		return new ResponseEntity<User>(registerUser, HttpStatus.OK);
	}
	
	/*
	 * Get user details by Email
	 */
	@GetMapping("/user/getUserByEmail/{email}")
	public  ResponseEntity<?> getUserByEmail(@PathVariable String email)
	{
		
		return new ResponseEntity<User>(userService.getUserByEmail(email), HttpStatus.OK);
	}
	
	/*
	 * Get user details by userId
	 */
	@GetMapping("/user/getUserById/{userId}")
	public ResponseEntity<?> getUserById(@PathVariable int userId) {
		return new ResponseEntity<User>(userService.getUserById(userId), HttpStatus.OK);
	}
	
	/*
	 * Delete User by userId
	 */
	@DeleteMapping("/user/deleteUserById/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable int userId) {
		boolean status = userService.deleteUserById(userId);
		if(status)
			return new ResponseEntity<String>("User with Id: "+userId+" deleted", HttpStatus.OK);
		return new ResponseEntity<String>("Failed", HttpStatus.OK);
	}
	
	/*
	 * Update user details
	 */
	@PutMapping("/user/update")
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
	@GetMapping("/user/getUserByEmailOrFirstName/{email}/{firstName}")
	public  ResponseEntity<?> getUserByEmailOrFirstName(@PathVariable String email,@PathVariable String firstName)
	{
		
		return new ResponseEntity<User>(userService.getUserByEmailOrFirstName(email, firstName), HttpStatus.OK);
	}
	
	@GetMapping("/user/getUserByFirstNameAndLastName/{firstName}/{lastName}")
	public  ResponseEntity<?> getUserByFirstNameAndLastName(@PathVariable String firstName,@PathVariable String lastName)
	{
		
		return new ResponseEntity<User>(userService.getUserByFirstNameAndLastName(firstName,lastName), HttpStatus.OK);
	}
	
	@GetMapping("/user/login/{userName}/{password}")
	public  ResponseEntity<?> login(@PathVariable String userName,@PathVariable String password)
	{
		
		return new ResponseEntity<User>(userService.login(userName, password), HttpStatus.OK);
	}
	
	

}