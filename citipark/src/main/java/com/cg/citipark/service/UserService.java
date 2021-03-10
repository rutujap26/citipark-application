package com.cg.citipark.service;

import org.springframework.stereotype.Service;

import com.cg.citipark.beans.User;

@Service
public interface UserService {
	/*
	 * Register user 
	 */
	public User addUser(User user);
	/*
	 * Get user details by email id
	 */
	public User getUserByEmail(String email);
	/*
	 * Get user details by userId
	 */
	public User getUserById(int userId);
	/*
	 * Delete user by userId
	 */
	public boolean deleteUserById(int userId);
	/*
	 * Update user details
	 */
	public User updateUser(User user);
	
	public User getUserByFirstNameAndLastName(String firstName,String lastName);
	public User getUserByEmailOrFirstName(String email,String firstName);
	
	
	public User login(String userName,String password);
	

}