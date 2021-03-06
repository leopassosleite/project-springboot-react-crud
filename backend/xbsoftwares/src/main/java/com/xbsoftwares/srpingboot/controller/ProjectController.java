package com.xbsoftwares.srpingboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xbsoftwares.srpingboot.model.Project;
import com.xbsoftwares.srpingboot.services.ProjectService;

@CrossOrigin("*")
@RestController
@RequestMapping("/projects")
public class ProjectController {
	
	@Autowired
	private ProjectService service;
	
	@GetMapping
	public List<Project> findAll() {
		return service.findAllProjects();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Project> findById(@PathVariable long id) {
		Project project = service.findById(id);
		return ResponseEntity.ok(project);
	}

	@PostMapping
	public ResponseEntity<Project> insert(@RequestBody Project obj) {
		obj = service.insert(obj);
		return ResponseEntity.ok().body(obj);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}