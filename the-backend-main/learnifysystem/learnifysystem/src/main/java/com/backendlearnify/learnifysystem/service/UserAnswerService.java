package com.backendlearnify.learnifysystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backendlearnify.learnifysystem.entity.Assignment;
import com.backendlearnify.learnifysystem.entity.QuestionA;
import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.entity.UserAnswer;
import com.backendlearnify.learnifysystem.repository.UserAnswerRepository;

@Service
public class UserAnswerService {


    @Autowired
    private UserAnswerRepository userAnswerRepository;

    
    public void submitAnswer(Long questionId, Long userId, String answer) {
        // Create a new UserAnswer object
        UserAnswer userAnswer = new UserAnswer();
        
        // Set the question and user IDs
        QuestionA question = new QuestionA();
        question.setId(questionId);
        userAnswer.setQuestion(question);
        
        User user = new User();
        user.setId(userId);
        userAnswer.setUser(user);
        
        // Set the answer
        String extractedValue = extractValue(answer);

        userAnswer.setAnswer(extractedValue);
        
        // Save the UserAnswer object
        userAnswerRepository.save(userAnswer);
    }

    public List<UserAnswer> getAnswersByAssignment(Assignment assignment) {
        return userAnswerRepository.findByQuestion_Assignment(assignment);
    }
    
    
    private String extractValue(String answer) {
        int count = 0;
        int start = -1;
        int end = -1;

        for (int i = 0; i < answer.length(); i++) {
            if (answer.charAt(i) == '"') {
                count++;
                if (count == 3) {
                    start = i + 1; // Start extracting after the third quote
                } else if (count == 4) {
                    end = i; // End extraction before the fourth quote
                    break;
                }
            }
        }

        // If start and end indices are valid, extract the substring
        if (start != -1 && end != -1) {
            return answer.substring(start, end);
        } else {
            // Handle the case when the third and fourth quotes are not found
            return null; // or throw an exception, depending on your requirement
        }
    }

    public List<UserAnswer> getAnswersByUserAndAssignment(Long userId, Long assignmentId) {
        return userAnswerRepository.findByUserIdAndAssignmentId(userId, assignmentId);
    } 
}
