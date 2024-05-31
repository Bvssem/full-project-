package com.backendlearnify.learnifysystem.repository;

import com.backendlearnify.learnifysystem.entity.Course;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Courserepository extends JpaRepository<Course, Long> {

    List<Course> findByUserId(Long userId);


}
