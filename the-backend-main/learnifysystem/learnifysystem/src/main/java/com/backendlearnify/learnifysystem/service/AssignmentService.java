package com.backendlearnify.learnifysystem.service;

import com.backendlearnify.learnifysystem.entity.*;
import com.backendlearnify.learnifysystem.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssignmentService {

    @Autowired
    private AssignmentRepository assignmentRepository;

    public Assignment createAssignment(Assignment assignment) {
        return assignmentRepository.save(assignment);
    }

    public List<Assignment> getAllAssignments() {
        return assignmentRepository.findAll();
    }
    
    public List<Assignment> getAssignmentsByUserId(Long userId) {
        // Assuming you have a repository method to fetch assignments by user ID
        return assignmentRepository.findByInstructorId(userId);
    }
    
    public Optional<Assignment> getAssignmentById(Long id) {
        return assignmentRepository.findById(id); }
}