package com.backendlearnify.learnifysystem.controller;

import com.backendlearnify.learnifysystem.DTO.AssignmentWithCourseTitleDTO;
import com.backendlearnify.learnifysystem.entity.Assignment;
import com.backendlearnify.learnifysystem.entity.Course;
import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.repository.AssignmentRepository;
import com.backendlearnify.learnifysystem.repository.Courserepository;
import com.backendlearnify.learnifysystem.repository.Userrepository;
import com.backendlearnify.learnifysystem.service.AssignmentService;
import com.backendlearnify.learnifysystem.service.Userservice;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/assignments")
public class AssignmentController {
	  @Autowired
	    private AssignmentService assignmentService;
	  
	  @Autowired
	    private Userrepository userRepository;

	    @Autowired
	    private Courserepository courseRepository;

	    @Autowired
	    private AssignmentRepository assignmentRepository;
	  
	  @Autowired
	    private Userservice userService;
	  @PostMapping("/{userId}/{courseId}")
	    public ResponseEntity<String> createAssignment(@PathVariable Long userId, @PathVariable Long courseId, @RequestBody Assignment assignment) {
	        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
	        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Course not found"));
	        assignment.setInstructor(user);
	        assignment.setCourse(course);
	        assignmentRepository.save(assignment);
	        return new ResponseEntity<>("Assignment created successfully", HttpStatus.CREATED);
	    }

	    @GetMapping
	    public List<Assignment> getAllAssignments() {
	        return assignmentService.getAllAssignments();
	    }
	    
	    @GetMapping("/{id}")
	    public ResponseEntity<Assignment> getAssignmentById(@PathVariable Long id) {
	        Optional<Assignment> assignment = assignmentService.getAssignmentById(id);
	        if (assignment.isPresent()) {
	            return ResponseEntity.ok(assignment.get());
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
	    @GetMapping("/userr/{userId}")
	    public ResponseEntity<List<AssignmentWithCourseTitleDTO>> getAssignmentsWithCourseTitleByUserId(@PathVariable Long userId) {
	        List<Assignment> assignments = assignmentRepository.findByInstructorId(userId);

	        List<AssignmentWithCourseTitleDTO> assignmentsWithCourseTitle = assignments.stream()
	                .map(assignment -> new AssignmentWithCourseTitleDTO(assignment, assignment.getCourse().getTitle()))
	                .collect(Collectors.toList());

	        return ResponseEntity.ok(assignmentsWithCourseTitle);
	    }
	    
	    @GetMapping("/user/{userId}")
	    public ResponseEntity<List<Assignment>> getAssignmentsByUserId(@PathVariable Long userId) {
	        List<Assignment> assignments = assignmentService.getAssignmentsByUserId(userId);
	        return ResponseEntity.ok(assignments);
	    }

}