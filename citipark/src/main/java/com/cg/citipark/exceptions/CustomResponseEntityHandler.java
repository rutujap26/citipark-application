package com.cg.citipark.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice

public class CustomResponseEntityHandler extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler
	public ResponseEntity<Object> handleDuplicateParkingPremiseException(DuplicateParkingPremiseException ex, WebRequest req){
		DuplicateParkingPremiseExceptionResponse duplicateParkingPremiseExceptionResponse = new DuplicateParkingPremiseExceptionResponse(ex.getMessage());
		return new ResponseEntity<Object>(duplicateParkingPremiseExceptionResponse  , HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler
	public ResponseEntity<Object> handleNoSuchParkingPremiseException(NoSuchParkingPremiseException ex, WebRequest req){
		NoSuchParkingPremiseExceptionResponse noSuchParkingPremiseExceptionResponse = new NoSuchParkingPremiseExceptionResponse(ex.getMessage());
		return new ResponseEntity<Object>(noSuchParkingPremiseExceptionResponse  , HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler(NoSuchParkingSlotException.class)
	public ResponseEntity<Object> handleNoSuchParkingSlotException(NoSuchParkingSlotException ex, WebRequest req){
		NoSuchParkingSlotExceptionResponse noSuchParkingSlotExceptionResponse = new NoSuchParkingSlotExceptionResponse(ex.getMessage());
		return new ResponseEntity<Object>(noSuchParkingSlotExceptionResponse  , HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler(ParkingSlotNotAvailableException.class)
	public ResponseEntity<Object> handleParkingSlotNotAvailableException(ParkingSlotNotAvailableException ex, WebRequest req){
		ParkingSlotNotAvailableExceptionResponse parkingSlotNotAvailableExceptionResponse = new ParkingSlotNotAvailableExceptionResponse(ex.getMessage());
		return new ResponseEntity<Object>(parkingSlotNotAvailableExceptionResponse  , HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler(NoSuchVehicleException.class)
	public ResponseEntity<Object> handleNoSuchVehicleException(NoSuchVehicleException exception, WebRequest request)
	{
		NoSuchVehicleExceptionResponse noSuchVehicleExceptionResponse = new NoSuchVehicleExceptionResponse(exception.getMessage());
		return new ResponseEntity<Object>(noSuchVehicleExceptionResponse,HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler(DuplicateVehicleException.class)
	public ResponseEntity<Object> handleDuplicateVehicleException(DuplicateVehicleException exception, WebRequest request){
		DuplicateVehicleExceptionResponse duplicateVehicleExceptionResponse =  new DuplicateVehicleExceptionResponse(exception.getMessage());
		return new ResponseEntity<Object>(duplicateVehicleExceptionResponse,HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler
	public ResponseEntity<Object> handlePaymentNotFoundException(PaymentNotFoundException ex, WebRequest request)
	{
		PaymentNotFoundExeptionResponse paymentNotFoundExceptionResponse  = new PaymentNotFoundExeptionResponse(ex.getMessage());
		return new ResponseEntity<Object>(paymentNotFoundExceptionResponse,HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler
	public ResponseEntity<Object> handleDuplicateUserException(DuplicateUserException ex, WebRequest request){
		DuplicateUserExceptionResponse duplicateUserExceptionResponse =  new DuplicateUserExceptionResponse(ex.getMessage());
		return new ResponseEntity<Object>(duplicateUserExceptionResponse,HttpStatus.BAD_REQUEST);
	}	
	
	@ExceptionHandler
	public ResponseEntity<Object> handleNoSuchUserFoundException(NoSuchUserFoundException ex, WebRequest request){
		NoSuchUserFoundExceptionResponse noSuchUserFoundExceptionResponse =  new NoSuchUserFoundExceptionResponse(ex.getMessage());
		return new ResponseEntity<Object>(noSuchUserFoundExceptionResponse,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler
	public ResponseEntity<Object> handleInvalidLoginCredentialsException(InvalidLoginCredentialsException ex, WebRequest request){
		InvalidLoginCredentialsExceptionResponse invalidLoginCredentialsExceptionResponse =  new InvalidLoginCredentialsExceptionResponse(ex.getMessage());
		return new ResponseEntity<Object>(invalidLoginCredentialsExceptionResponse,HttpStatus.BAD_REQUEST);
	}
}