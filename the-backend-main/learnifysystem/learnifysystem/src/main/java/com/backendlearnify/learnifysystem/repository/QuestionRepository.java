package com.backendlearnify.learnifysystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backendlearnify.learnifysystem.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
	
	
}

