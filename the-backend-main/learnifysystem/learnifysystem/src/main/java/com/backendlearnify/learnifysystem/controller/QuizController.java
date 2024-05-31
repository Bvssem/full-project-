package com.backendlearnify.learnifysystem.controller;

import com.backendlearnify.learnifysystem.DTO.QuizWithCourseTitleDTO;
import com.backendlearnify.learnifysystem.entity.Course;
import com.backendlearnify.learnifysystem.entity.Quiz;
import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.repository.Courserepository;
import com.backendlearnify.learnifysystem.repository.QuizRepository;
import com.backendlearnify.learnifysystem.repository.Userrepository;
import com.backendlearnify.learnifysystem.service.QuizService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.stream.Collectors;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/quizzes")
public class QuizController {
	@Autowired
    private QuizService quizService;
	@Autowired
    private Userrepository userRepository;
	@Autowired
    private QuizRepository quizRepository;
	
	@Autowired
    private Courserepository courseRepository;
	
	

    @GetMapping
    public List<Quiz> getAllQuizzes() {
        return quizService.getAllQuizzes();
    }

    @GetMapping("/{id}")
    public Quiz getQuizById(@PathVariable Long id) {
        return quizService.getQuizById(id);
    }
    
    @PostMapping("/{userId}/{courseId}")
    public ResponseEntity<String> createQuiz(@PathVariable Long userId, @PathVariable Long courseId, @RequestBody Quiz quiz) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Course not found"));
        quiz.setUser(user);
        quiz.setCourse(course);
        quizRepository.save(quiz);
        return new ResponseEntity<>("Quiz created successfully", HttpStatus.CREATED);
    }
    
    @GetMapping("/userr/{userId}")
    public ResponseEntity<List<QuizWithCourseTitleDTO>> getQuizzesWithCourseTitleByUserId(@PathVariable Long userId) {
        List<Quiz> quizzes = quizRepository.findByUserId(userId);

        List<QuizWithCourseTitleDTO> quizzesWithCourseTitle = quizzes.stream()
                .map(quiz -> new QuizWithCourseTitleDTO(quiz, quiz.getCourse().getTitle()))
                .collect(Collectors.toList());

        return new ResponseEntity<>(quizzesWithCourseTitle, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public List<Quiz> getQuizzesByUserId(@PathVariable Long userId) {
        return quizRepository.findByUserId(userId);
    }
}