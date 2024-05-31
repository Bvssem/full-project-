package com.backendlearnify.learnifysystem.controller;

import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.service.Userservice;
import com.backendlearnify.learnifysystem.service.Userserviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class Usercontroller {
    @Autowired
    private Userservice userservice;
    
    @Autowired
    private Userserviceimpl userS;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userservice.saveUser(user);
        return "user added";
    }
    @GetMapping("/getall")
    public List<User> getall(){

        return userservice.getAllUsers();
    }
    
    @GetMapping("/count/instructors")
    public long countInstructors() {
        return userS.countInstructors();
    }

    @GetMapping("/count/students")
    public long countStudents() {
        return userS.countStudents();
    }

}
