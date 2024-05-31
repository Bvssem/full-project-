package com.backendlearnify.learnifysystem.repository;

import com.backendlearnify.learnifysystem.entity.Assignment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
    List<Assignment> findByInstructorId(Long instructorId);

}
