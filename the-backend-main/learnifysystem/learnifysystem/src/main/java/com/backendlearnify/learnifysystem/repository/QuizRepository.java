package com.backendlearnify.learnifysystem.repository;

import com.backendlearnify.learnifysystem.entity.Quiz;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
	List<Quiz> findByUserId(Long userId);
	@Query("SELECT q.id, q.title, c.title FROM Quiz q JOIN q.course c WHERE c.user.id = :userId")
    List<Object[]> findQuizzesWithCourseTitleByUserId(Long userId);
}
