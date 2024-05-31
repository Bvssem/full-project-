package com.backendlearnify.learnifysystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backendlearnify.learnifysystem.entity.Choice;
import com.backendlearnify.learnifysystem.repository.ChoiceRepository;

@Service
public class ChoiceService {
	@Autowired
    private ChoiceRepository choiceRepository;

    public Choice saveChoice(Choice choice) {
        return choiceRepository.save(choice);
    }
    

}
