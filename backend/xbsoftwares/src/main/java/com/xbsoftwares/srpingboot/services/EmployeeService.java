package com.xbsoftwares.srpingboot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xbsoftwares.srpingboot.model.Employee;
import com.xbsoftwares.srpingboot.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	public List<Employee> findAllEmployees(){
		return employeeRepository.findAll();
	}
	
	public Employee insert(Employee obj) {
		return employeeRepository.save(obj);
	}
}