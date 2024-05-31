package com.backendlearnify.learnifysystem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backendlearnify.learnifysystem.DTO.UserAnswerDTO;
import com.backendlearnify.learnifysystem.entity.Assignment;
import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.entity.UserAnswer;
import com.backendlearnify.learnifysystem.service.AssignmentService;
import com.backendlearnify.learnifysystem.service.UserAnswerService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import java.util.stream.Collectors;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/answers")
public class UserAnswerController {

	@Autowired
    private UserAnswerService userAnswerService;
	@Autowired 
	private AssignmentService AssService ;

	  @PostMapping("/submit")
	    public void submitAnswer(
	        @RequestParam Long questionId,
	        @RequestParam Long userId,
	        @RequestBody String answer) throws JsonMappingException, JsonProcessingException {
	        userAnswerService.submitAnswer(questionId, userId, answer);
	    }

	  @GetMapping("/assignment/{assignmentId}")
	  public List<UserAnswerDTO> getUserAnswersByAssignment(@PathVariable Long assignmentId) {
	        Optional<Assignment> assignmentOptional = AssService.getAssignmentById(assignmentId);

	        if (assignmentOptional.isPresent()) {
	            Assignment assignment = assignmentOptional.get();
	            List<UserAnswer> userAnswers = userAnswerService.getAnswersByAssignment(assignment);

	            // Convert UserAnswer to UserAnswerDTO
	            return userAnswers.stream()
	                    .map(userAnswer -> new UserAnswerDTO(
	                            userAnswer.getId(),
	                            userAnswer.getAnswer(),
	                            userAnswer.getUser().getId(),
	                            userAnswer.getUser().getUsername())) // Include username if needed
	                    .collect(Collectors.toList());
	        } else {
return  null;	        }
	    }


    @GetMapping("/user/{userId}/assignment/{assignmentId}")
    public List<UserAnswer> getUserAnswersByUserAndAssignment(@PathVariable Long userId, @PathVariable Long assignmentId) {
        return userAnswerService.getAnswersByUserAndAssignment(userId, assignmentId);
    } 
}