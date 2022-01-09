package com.xbsoftwares.srpingboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xbsoftwares.srpingboot.model.Employee;
import com.xbsoftwares.srpingboot.services.EmployeeService;

@CrossOrigin("*")
@RestController
@RequestMapping("/employees")
public class EmployeeController {

	@Autowired
	private EmployeeService service;

	@GetMapping
	public ResponseEntity<List<Employee>> findAll() {
		List<Employee> list = service.findAllEmployees();
		return ResponseEntity.ok().body(list);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Employee> findById(@PathVariable long id) {
		Employee employee = service.findById(id);
		return ResponseEntity.ok(employee);
	}

	@PostMapping
	public ResponseEntity<Employee> insert(@RequestBody Employee obj) {
		obj = service.insert(obj);
		return ResponseEntity.ok().body(obj);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<Employee> update(@PathVariable Long id, @RequestBody Employee obj){
		obj = service.update(id, obj);
		return ResponseEntity.ok(obj);
	}
}
