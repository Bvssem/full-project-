package com.backendlearnify.learnifysystem.controller;

import com.backendlearnify.learnifysystem.entity.Course;
import java.util.stream.Collectors;

import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.service.Courseservice;
import com.backendlearnify.learnifysystem.service.Userservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/courses")
public class Coursecontroller {

    @Autowired
    private final Courseservice courseService;
    
    private final Userservice userService;


    @Autowired
    public Coursecontroller(Courseservice courseService, Userservice userService) {
        this.courseService = courseService;
        this.userService = userService;

    }

    @PostMapping("/save")
    public ResponseEntity<String> saveCourse(@RequestBody Course course, @RequestParam Long userId) {
        try {
            User user = userService.findById(userId);
            if (user != null) {
                course.setUser(user);
                courseService.saveCourse(course);
                return new ResponseEntity<>("Course saved successfully", HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("User not found", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            String errorMessage = e.getMessage() != null ? e.getMessage().replaceAll("([\\n\\r\\t\\$\\'\\\"\\;\\:\\)]*)", "") : "";
            if (errorMessage.isBlank()) {
                errorMessage = "An error occurred while saving the course.";
            }
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Course>> getCoursesByUserId(@PathVariable Long userId) {
        List<Course> courses = courseService.getCoursesByUserId(userId);
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }
    
    @GetMapping("/user/{userId}/approved")
    public ResponseEntity<List<Course>> getApprovedCoursesByUserId(@PathVariable Long userId) {
        List<Course> courses = courseService.getCoursesByUserId(userId);
        List<Course> approvedCourses = courses.stream()
                                              .filter(Course::isApproved)
                                              .collect(Collectors.toList());
        return new ResponseEntity<>(approvedCourses, HttpStatus.OK);
    }
    
    
    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        Course course = courseService.getCourseById(id);
        if (course != null) {
            return new ResponseEntity<>(course, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = courseService.getAllCourses();
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }
    
    @GetMapping("/approvedcourses")
    public ResponseEntity<List<Course>> getApprovedCourses() {
        List<Course> courses = courseService.getAllCourses();
        List<Course> approvedCourses = courses.stream()
                                              .filter(Course::isApproved)
                                              .collect(Collectors.toList());
        return new ResponseEntity<>(approvedCourses, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateCourse(@PathVariable Long id, @RequestBody Course updatedCourse) {
        courseService.updateCourse(id, updatedCourse);
        return new ResponseEntity<>("Course updated successfully", HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCourseById(@PathVariable Long id) {
        courseService.deleteCourseById(id);
        return new ResponseEntity<>("Course deleted successfully", HttpStatus.OK);
    }
    
    @GetMapping("/count")
    public ResponseEntity<Long> countCourses() {
        long count = courseService.countCourses();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
}
