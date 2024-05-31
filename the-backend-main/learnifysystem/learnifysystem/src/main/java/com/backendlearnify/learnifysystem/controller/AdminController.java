package com.backendlearnify.learnifysystem.controller;

import com.backendlearnify.learnifysystem.entity.Admin;
import com.backendlearnify.learnifysystem.entity.Course;
import com.backendlearnify.learnifysystem.entity.ERole;
import com.backendlearnify.learnifysystem.entity.Event;
import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.repository.Userrepository;
import com.backendlearnify.learnifysystem.service.AdminService;
import com.backendlearnify.learnifysystem.service.Courseservice;
import com.backendlearnify.learnifysystem.service.EventService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/admins")
public class AdminController {
    private final AdminService adminService;
    
    @Autowired
    private EventService eventService;
    @Autowired
    private Courseservice courseService;
    
    

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/add")
    public ResponseEntity<Admin> addAdmin(@RequestBody Admin admin) {
        Admin savedAdmin = adminService.saveAdmin(admin);
        return new ResponseEntity<>(savedAdmin, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable("id") Long adminId) {
        adminService.deleteAdmin(adminId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable("id") Long adminId) {
        Admin admin = adminService.findById(adminId);
        return admin != null ? ResponseEntity.ok(admin) : ResponseEntity.notFound().build();
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<Admin> getAdminByUsername(@PathVariable("username") String username) {
        Admin admin = adminService.findByUsername(username);
        return admin != null ? ResponseEntity.ok(admin) : ResponseEntity.notFound().build();
    }
    
    
    @PatchMapping("approove/{id}")
    public ResponseEntity<Event> approveEvent(@PathVariable Long id) {
        Event event = eventService.getEventById(id);
        if (event != null) {
            event.setIsapprooved(true);
            System.out.println(event);
            eventService.updateEvent(id,event);
            return ResponseEntity.ok(event);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("reject/{id}")
    public ResponseEntity<Void> rejectEvent(@PathVariable Long id) {
        eventService.deleteEventById(id);
        return ResponseEntity.noContent().build();
    }
    
    
    @PatchMapping("/courses/approve/{id}")
    public ResponseEntity<Course> approveCourse(@PathVariable Long id) {
        Course course = courseService.getCourseById(id);
        if (course != null) {
            course.setApproved(true);
            courseService.updateCourse(id, course);
            return ResponseEntity.ok(course);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/courses/reject/{id}")
    public ResponseEntity<Course> rejectCourse(@PathVariable Long id) {
        Course course = courseService.getCourseById(id);
        if (course != null) {
            course.setApproved(false);
            courseService.updateCourse(id, course);
            return ResponseEntity.ok(course);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @Autowired
    private Userrepository userRepository;

    @GetMapping("/pendinginstructors")
    public List<User> getPendingInstructors() {
        return userRepository.findByRoleAndApprovedFalse(ERole.ROLE_INSTRUCTOR);
    }

    @PatchMapping("/{id}/approveinstructor")
    public ResponseEntity<?> approveInstructor(@PathVariable Long id) {
        User instructor = userRepository.findById(id)
                .orElse(null);

        if (instructor == null) {
            return ResponseEntity.notFound().build();
        }

        instructor.setApproved(true);
        userRepository.save(instructor);

        return ResponseEntity.ok().build();
    } 
    
    @DeleteMapping("rejectinstructor/{id}")
    public ResponseEntity<?> rejectInstructor(@PathVariable Long id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
