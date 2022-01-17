package com.xbsoftwares.srpingboot.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xbsoftwares.srpingboot.model.Project;
import com.xbsoftwares.srpingboot.repository.ProjectRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;

	public List<Project> findAllProjects() {
		return projectRepository.findAll();
	}

	public Project insert(Project obj) {
		return projectRepository.save(obj);
	}

	public Project findById(Long id) {
		Optional<Project> obj = projectRepository.findById(id);
		return obj.get();
	}
	
	public void delete(Long id) {
		projectRepository.deleteById(id);
	}
}
