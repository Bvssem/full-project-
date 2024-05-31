package com.backendlearnify.learnifysystem.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Quiz {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String title;

	    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, orphanRemoval = true)
	    @JsonManagedReference
	    private List<Question> questions = new ArrayList<>();

	    @ManyToOne
	    @JsonBackReference
	    @JsonIgnore
	    @JoinColumn(name = "user_id")
	    private User user;

	    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, orphanRemoval = true)
	    @JsonIgnore
	    @JsonManagedReference
	    private List<QuizAttempt> quizAttempts = new ArrayList<>();
	    
	    @ManyToOne
	    @JoinColumn(name = "course_id", nullable = false)
	    @JsonIgnore
	    private Course course;
	    

    // Getters and setters
}
