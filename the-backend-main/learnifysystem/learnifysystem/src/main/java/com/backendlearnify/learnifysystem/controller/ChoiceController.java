package com.backendlearnify.learnifysystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backendlearnify.learnifysystem.entity.Choice;
import com.backendlearnify.learnifysystem.service.ChoiceService;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/choices")
public class ChoiceController {
    @Autowired
    private ChoiceService choiceService;

    @PostMapping
    public Choice createChoice(@RequestBody Choice choice) {
        return choiceService.saveChoice(choice);
    }
}