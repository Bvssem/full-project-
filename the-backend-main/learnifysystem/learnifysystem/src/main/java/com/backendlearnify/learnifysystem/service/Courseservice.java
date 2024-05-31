package com.backendlearnify.learnifysystem.service;

import java.util.List;

import com.backendlearnify.learnifysystem.entity.Course;

public interface Courseservice {
    void saveCourse(Course course);
    Course getCourseById(Long id);
    void updateCourse(Long id,Course course);
    void deleteCourseById(Long id);
    List<Course> getAllCourses();
    List<Course> getCoursesByUserId(Long userId);
    long countCourses();




}
