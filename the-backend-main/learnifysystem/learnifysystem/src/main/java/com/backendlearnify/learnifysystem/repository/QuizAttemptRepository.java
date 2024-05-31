package com.backendlearnify.learnifysystem.repository;
import com.backendlearnify.learnifysystem.entity.QuizAttempt;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizAttemptRepository extends JpaRepository<QuizAttempt, Long> {
    List<QuizAttempt> findByUserId(Long userId);
}
