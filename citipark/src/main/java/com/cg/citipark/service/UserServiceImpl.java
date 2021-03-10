package com.cg.citipark.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.citipark.beans.User;
import com.cg.citipark.exceptions.DuplicateUserException;
import com.cg.citipark.exceptions.NoSuchUserFoundException;
import com.cg.citipark.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository userRepository;
	
	/*
	 * Register user
	 */
	@Override
	public User addUser(User user) {
		User registerUser = userRepository.findByEmail(user.getEmail());
		if(registerUser==null)
		{
			return userRepository.save(user);
		}
		else
			throw new DuplicateUserException("User with email : " + user.getEmail()
					+ " already exists");
		
	}
	
	/*
	 * Get user details by email id
	 */
	@Override
    public User getUserByEmail(String email) {
		
		User user= userRepository.findByEmail(email);
		 if (user == null) 
	 		{
	 			throw new NoSuchUserFoundException("User with email: "+email+" does not exist");
	 		}
	 		return user;
	    }
	
	/*
	 * Get user details by user Id
	 */
	@Override
    public User getUserById(int userId) {
		Optional<User> user = userRepository.findById(userId);
		if (!user.isPresent()) 
		{
			throw new NoSuchUserFoundException("User with id: "+userId+" does not exist");
		}
		return user.get();
	}
	
	/*
	 * Delete user by user Id
	 */
	@Override
	public boolean deleteUserById(int userId) {
		Optional<User> user = userRepository.findById(userId);
		if(!user.isPresent())
			throw new NoSuchUserFoundException("User with id: "+userId+" does not exists");
		userRepository.deleteById(userId);
		return true;
	}
	
	/*
	 * Update user details
	 */
	@Override
     public User updateUser(User user) {
 		User updateUser = userRepository.findById(user.getUserId()).get();
 		if(updateUser!= null)
 			return userRepository.save(user);
 		return null;
 	}
	@Override
	public User getUserByEmailOrFirstName(String email,String firstName)
	{
		User user= userRepository.findUserByEmailOrFirstName(email, firstName);
		 if (user == null) 
	 		{
	 			throw new NoSuchUserFoundException("User with email: "+email+" or "+firstName+" does not exist");
	 		}
	 		return user;
	}
	@Override
	public User getUserByFirstNameAndLastName(String firstName,String lastName)
	{
		User user= userRepository.findByFirstNameAndLastName(firstName,lastName);
		 if (user == null) 
	 		{
	 			throw new NoSuchUserFoundException("User with email: "+firstName+" or "+lastName+" does not exist");
	 		}
	 		return user;
	}
	
	
	@Override
	public User login(String userName,String password)
	{
	
		User user = userRepository.findByUserName(userName);
		if (user == null) 
		{	
			throw new NoSuchUserFoundException("User with username: "+userName+" does not exist");
		}
		else
		{
			if(user.getPassword().equals(password))
			{
				return user;
			}
			throw new NoSuchUserFoundException("Invalid password");
		}
	}
		
}