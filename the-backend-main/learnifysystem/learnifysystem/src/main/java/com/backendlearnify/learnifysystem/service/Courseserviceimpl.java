package com.backendlearnify.learnifysystem.service;

import com.backendlearnify.learnifysystem.entity.Course;
import com.backendlearnify.learnifysystem.repository.Courserepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Courseserviceimpl implements Courseservice {
    private final Courserepository courseRepository;

    @Autowired
    public Courseserviceimpl(Courserepository courseRepository) {

        this.courseRepository = courseRepository;
    }

    @Override
    public void saveCourse(Course course) {

        courseRepository.save(course);
    }
    @Override
    public Course getCourseById(Long id) {

        return courseRepository.findById(id).orElse(null);
    }
    @Override
    public void updateCourse(Long id, Course updatedCourse) {
        // Check if the course exists in the database
       Optional<Course> optionalCourse = courseRepository.findById(id);
        if (optionalCourse.isPresent()) {
            // Get the existing course
            Course existingCourse = optionalCourse.get();
            // Update the fields of the existing course with the values from the updated course
            existingCourse.setTitle(updatedCourse.getTitle());
            existingCourse.setPrice(updatedCourse.getPrice());
            existingCourse.setSlug(updatedCourse.getSlug());
            existingCourse.setAboutCourse(updatedCourse.getAboutCourse());
            existingCourse.setMaximumStudents(updatedCourse.getMaximumStudents());
            existingCourse.setDifficultyLevel(updatedCourse.getDifficultyLevel());
            existingCourse.setPublicCourse(updatedCourse.isPublicCourse());
            existingCourse.setEnableQA(updatedCourse.isEnableQA());
            existingCourse.setCategories(updatedCourse.getCategories());
            existingCourse.setCourseThumbnail(updatedCourse.getCourseThumbnail());
            existingCourse.setIntroVideoPath(updatedCourse.getIntroVideoPath());
            existingCourse.setStartDate(updatedCourse.getStartDate());
            existingCourse.setVideoSource(updatedCourse.getVideoSource());
            existingCourse.setYoutubeVideoId(updatedCourse.getYoutubeVideoId());
            existingCourse.setLanguage(updatedCourse.getLanguage());
            existingCourse.setRequirements(updatedCourse.getRequirements());
            existingCourse.setDescription(updatedCourse.getDescription());
            existingCourse.setTotalCourseDurationHours(updatedCourse.getTotalCourseDurationHours());
            existingCourse.setTotalCourseDurationMinutes(updatedCourse.getTotalCourseDurationMinutes());
            existingCourse.setCourseTags(updatedCourse.getCourseTags());
            existingCourse.setTargetedAudience(updatedCourse.getTargetedAudience());
            existingCourse.setApproved(updatedCourse.isApproved());
            // Save the updated course
            courseRepository.save(existingCourse);
        } else {
            throw new RuntimeException("Course not found with id: " + id);
        }
    }
    @Override
    public void deleteCourseById(Long id) {

        courseRepository.deleteById(id);
    }

    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }
    
    @Override
    public List<Course> getCoursesByUserId(Long userId) {
        return courseRepository.findByUserId(userId);
    }
    
    @Override
    public long countCourses() {
        return courseRepository.count();
    }

}
