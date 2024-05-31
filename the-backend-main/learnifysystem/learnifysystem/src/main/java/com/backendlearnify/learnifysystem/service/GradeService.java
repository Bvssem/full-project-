package com.backendlearnify.learnifysystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backendlearnify.learnifysystem.DTO.GradeDTO;
import com.backendlearnify.learnifysystem.entity.Grade;
import com.backendlearnify.learnifysystem.repository.GradeRepository;
import java.util.stream.Collectors;

@Service
public class GradeService {

    @Autowired
    private GradeRepository gradeRepository;

    public Grade saveGrade(Grade grade) {
        return gradeRepository.save(grade);
    }
    
    public List<Grade> getGradesByUser(Long userId) {
        return gradeRepository.findByUserId(userId);
    }

    public List<GradeDTO> getGradesByInstructor(Long instructorId) {
        List<Grade> grades = gradeRepository.findByAssignment_InstructorId(instructorId);
        return grades.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private GradeDTO convertToDTO(Grade grade) {
        return new GradeDTO(
            grade.getId(),
            grade.getScore(),
            grade.getAssignment().getTitle(),
            grade.getUser().getUsername()
        );
    }
}
