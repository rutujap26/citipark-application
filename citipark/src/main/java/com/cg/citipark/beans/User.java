package com.cg.citipark.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="users")
public class User {
	/*
	 * Id of the user
	 */
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int userId;
	/*
	 * First name 
	 */
	@NotBlank(message = "First name required")
	@Column(name="firstName")
	private String firstName;
	/*
	 * Last Name
	 */
	@NotBlank(message = "Lastname required")
	@Column(name="lastName")
	private String lastName;
	/*
	 * Email Id
	 */
	@NotBlank(message = "Email Id required")
	@Column(unique = true)
	private String email;
	/*
	 * Mobile Number
	 */
	@NotBlank(message = "Mobile number required")
	@Column(nullable = false, unique = true, length = 10)
	private String mobile;
	/*
	 * Getters and Setters
	 */
	@Column(unique=true)
	private String userName;
	
	private String password;
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public int getUserId() {
		return userId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public User() {
		super();
	}
	/*
	 * Parameterized Constructor
	 */
	public User(int userId, @NotBlank(message = "First name required") String firstName,
			@NotBlank(message = "Lastname required") String lastName,
			@NotBlank(message = "Email Id required") String email,
			@NotBlank(message = "Mobile number required") String mobile, String userName, String password) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobile = mobile;
		this.userName = userName;
		this.password = password;
		
	}
	
}