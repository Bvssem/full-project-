package com.backendlearnify.learnifysystem.DTO;


import com.backendlearnify.learnifysystem.entity.Quiz;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuizWithCourseTitleDTO {
    private Quiz quiz;
    private String courseTitle;
}

