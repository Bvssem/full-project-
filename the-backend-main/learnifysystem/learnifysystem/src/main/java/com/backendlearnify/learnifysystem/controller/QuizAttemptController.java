package com.backendlearnify.learnifysystem.controller;

import com.backendlearnify.learnifysystem.entity.Quiz;
import com.backendlearnify.learnifysystem.entity.QuizAttempt;
import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.repository.QuizAttemptRepository;
import com.backendlearnify.learnifysystem.repository.QuizRepository;
import com.backendlearnify.learnifysystem.repository.Userrepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/quizAttempts")
public class QuizAttemptController {

    private final QuizAttemptRepository quizAttemptRepository;
    private final QuizRepository quizRepository;
    private final Userrepository userRepository;


    @Autowired
    public QuizAttemptController(QuizAttemptRepository quizAttemptRepository, QuizRepository quizRepository,Userrepository userRepository) {
        this.quizAttemptRepository = quizAttemptRepository;
        this.quizRepository = quizRepository;
        this.userRepository = userRepository;

    }

    @PostMapping("/{quizId}/{userId}")
    public ResponseEntity<String> createQuizAttempt(@PathVariable Long quizId, @PathVariable Long userId, @RequestBody Map<String, Object> request) {
        // Fetch the quiz associated with the attempt
        Quiz quiz = quizRepository.findById(quizId).orElse(null);
        if (quiz == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Quiz not found");
        }

        // Fetch the user associated with the attempt
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        // Extract score from request body
        int score = (int) request.get("score");

        // Extract answers from request body
        String answers = request.get("answers").toString();

        // Create a new quiz attempt
        QuizAttempt quizAttempt = new QuizAttempt();
        quizAttempt.setQuiz(quiz);
        quizAttempt.setUser(user);
        quizAttempt.setScore(score);

        // Save the quiz attempt
        quizAttemptRepository.save(quizAttempt);
        return ResponseEntity.status(HttpStatus.CREATED).body("Quiz attempt created successfully");
    }


    @GetMapping
    public List<Map<String, Object>> getAllQuizAttempts() {
        List<QuizAttempt> quizAttempts = quizAttemptRepository.findAll();
        List<Map<String, Object>> quizAttemptDetails = new ArrayList<>();
        for (QuizAttempt quizAttempt : quizAttempts) {
            Map<String, Object> details = new HashMap<>();
            details.put("quizTitle", quizAttempt.getQuiz().getTitle());
            details.put("username", quizAttempt.getUser().getUsername());
            details.put("score", quizAttempt.getScore());
            quizAttemptDetails.add(details);
        }
        return quizAttemptDetails;
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuizAttempt> getQuizAttemptById(@PathVariable("id") Long id) {
        Optional<QuizAttempt> optionalQuizAttempt = quizAttemptRepository.findById(id);
        return optionalQuizAttempt.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    
    @GetMapping("/user/{userId}")
    public List<Map<String, Object>> getQuizAttemptsByUserId(@PathVariable Long userId) {
        List<QuizAttempt> quizAttempts = quizAttemptRepository.findByUserId(userId);
        List<Map<String, Object>> quizAttemptDetails = new ArrayList<>();
        for (QuizAttempt quizAttempt : quizAttempts) {
            Map<String, Object> details = new HashMap<>();
            details.put("quizTitle", quizAttempt.getQuiz().getTitle());
            details.put("score", quizAttempt.getScore());
            quizAttemptDetails.add(details);
        }
        return quizAttemptDetails;
    }

    // Other CRUD operations and additional endpoints can be added as needed
}
