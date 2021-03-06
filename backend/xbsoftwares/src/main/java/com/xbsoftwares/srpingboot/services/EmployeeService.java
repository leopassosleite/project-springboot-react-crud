package com.xbsoftwares.srpingboot.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xbsoftwares.srpingboot.model.Employee;
import com.xbsoftwares.srpingboot.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	public List<Employee> findAllEmployees() {
		return employeeRepository.findAll();
	}

	public Employee insert(Employee obj) {
		return employeeRepository.save(obj);
	}

	public Employee findById(Long id) {
		Optional<Employee> obj = employeeRepository.findById(id);
		return obj.get();
	}
	
	public Employee update(Long id, Employee obj) {
		Employee entity = employeeRepository.getOne(id);
		updateData(entity, obj);
		return employeeRepository.save(entity);
	}
	
	public void delete(Long id) {
		employeeRepository.deleteById(id);
	}

	private void updateData(Employee entity, Employee obj) {
		entity.setName(obj.getName());
		entity.setPhone(obj.getPhone());
		entity.setEmailId(obj.getEmailId());
		entity.setAction(obj.getAction());
	}
}
