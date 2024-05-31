package com.backendlearnify.learnifysystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backendlearnify.learnifysystem.entity.Quiz;
import com.backendlearnify.learnifysystem.repository.QuizRepository;
@Service
public class  QuizService {
	@Autowired
    private QuizRepository quizRepository;

    public Quiz saveQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Quiz getQuizById(Long id) {
        return quizRepository.findById(id).orElse(null);
    }
}