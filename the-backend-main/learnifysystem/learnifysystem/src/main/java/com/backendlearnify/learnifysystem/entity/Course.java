package com.backendlearnify.learnifysystem.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Double price;
    private String slug;
    private String aboutCourse;

    // Course Setting
    private int maximumStudents;
    private String difficultyLevel;
    private boolean isPublicCourse;
    private boolean enableQA;

    // Choose Categories
    private String categories;
    private String courseThumbnail;
    // Course Intro Video
    private String introVideoPath; // Store local video path or video URL
    private Date startDate;
    private String videoSource;
    private String youtubeVideoId;
    private String language;
    private String requirements;
    private String description;
    private int totalCourseDurationHours;
    private int totalCourseDurationMinutes;
    private String courseTags;
    private String targetedAudience;
    
   

    // Approval Status
    private boolean approved=false;
    @JsonIgnore
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<Review> reviews = new ArrayList<>();
    @JsonManagedReference
    @JsonIgnore
    @OneToMany(mappedBy = "course")
    private Collection<CartItem> cartItem = new ArrayList<>();
    @JsonBackReference
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
