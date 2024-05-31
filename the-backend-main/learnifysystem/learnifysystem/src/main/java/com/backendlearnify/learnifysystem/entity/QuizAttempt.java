package com.backendlearnify.learnifysystem.entity;



import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Entity
public class QuizAttempt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Establishing the relationship with Quiz

    @ManyToOne
    @JsonBackReference
    @JsonIgnore
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;

    
    
    
    @ManyToOne
    @JsonBackReference
    @JsonIgnore
    @JoinColumn(name = "user_id")
    private User user;
    public QuizAttempt(Quiz quiz) {
		super();
		this.quiz = quiz;
	}

	public QuizAttempt() {
		super();
		// TODO Auto-generated constructor stub
	}

    private int score;

	
	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	

	@Lob
    private String answers;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Quiz getQuiz() {
		return quiz;
	}

	public void setQuiz(Quiz quiz) {
		this.quiz = quiz;
	}

}

