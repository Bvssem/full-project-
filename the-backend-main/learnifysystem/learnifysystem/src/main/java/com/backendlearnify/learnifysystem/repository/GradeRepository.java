package com.backendlearnify.learnifysystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.backendlearnify.learnifysystem.entity.Grade;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {
	
	 List<Grade> findByUserId(Long userId);

	    @Query("SELECT g FROM Grade g WHERE g.instructor.id = :instructorId\r\n"
	    		+ "")
	    List<Grade> findByAssignment_InstructorId(Long instructorId);
}
