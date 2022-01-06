package com.xbsoftwares.srpingboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xbsoftwares.srpingboot.model.Employee;
import com.xbsoftwares.srpingboot.services.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/employees")
public class EmployeeController {
	
	@Autowired
	private EmployeeService service;
	
	@GetMapping("/employees")
	public ResponseEntity <List<Employee>> findAll(){
		List<Employee> list = service.findAllEmployees();
		return ResponseEntity.ok().body(list);
	}
}
