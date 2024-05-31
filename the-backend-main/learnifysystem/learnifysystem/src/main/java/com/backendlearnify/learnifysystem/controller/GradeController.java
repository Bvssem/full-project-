package com.backendlearnify.learnifysystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backendlearnify.learnifysystem.DTO.GradeDTO;
import com.backendlearnify.learnifysystem.entity.Grade;
import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.service.GradeService;
import com.backendlearnify.learnifysystem.service.Userservice;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/grades")
public class GradeController {

    @Autowired
    private GradeService gradeService;
    
    @Autowired
    private Userservice userService;

    @PostMapping("/submit")
    public Grade submitGrade(@RequestParam Long userId, @RequestParam Long instructorId, @RequestBody Grade grade) {
        User user = userService.findById(userId);
        User instructor = userService.findById(instructorId);
        grade.setUser(user);
        grade.setInstructor(instructor);
        return gradeService.saveGrade(grade);
    }

    @GetMapping("/user/{userId}")
    public List<Grade> getGradesByUser(@PathVariable Long userId) {
        return gradeService.getGradesByUser(userId);
    }

    @GetMapping("/instructor/{instructorId}")
    public List<GradeDTO> getGradesByInstructor(@PathVariable Long instructorId) {
        return gradeService.getGradesByInstructor(instructorId);
    }
}
