package com.cg.citipark.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cg.citipark.beans.User;


public interface UserRepository extends JpaRepository<User,Integer>{

	@Query(value ="SELECT u FROM User u WHERE email=:email")
	User findByEmail(String email);
	@Query(value="SELECT u FROM User u WHERE firstName=:firstName AND lastName=:lastName")
	User findByFirstNameAndLastName(String firstName,String lastName);
	@Query(value="SELECT u FROM User u WHERE email=:email OR firstName=:firstName")
	User findUserByEmailOrFirstName(String email, String firstName);
	@Query(value ="SELECT u FROM User u WHERE userName=:userName")
	User findByUserName(String userName);
	
}