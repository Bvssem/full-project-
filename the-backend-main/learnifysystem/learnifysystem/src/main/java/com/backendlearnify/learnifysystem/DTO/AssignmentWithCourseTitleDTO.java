package com.backendlearnify.learnifysystem.DTO;


import com.backendlearnify.learnifysystem.entity.Assignment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentWithCourseTitleDTO {
    private Assignment assignment;
    private String courseTitle;
}

