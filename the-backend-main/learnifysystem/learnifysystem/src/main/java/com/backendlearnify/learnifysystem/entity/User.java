package com.backendlearnify.learnifysystem.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String username;
	    private String email;
	    private String password;
	    @Column(length = 1024)
	    private String cvUrl;

	    @Enumerated(EnumType.STRING)
	    private ERole role;

	    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	    @JsonManagedReference
	    private List<Announcements> announcements = new ArrayList<>();

	    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	    @JsonManagedReference
	    private List<Event> events = new ArrayList<>();

	    
	    @Getter
		private boolean approved;

	    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	    @JsonManagedReference
	    private List<Order> orders = new ArrayList<>();

	    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	    @JsonManagedReference
	    private List<Quiz> quizzes = new ArrayList<>();
	    
	    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	    @JsonManagedReference
	    private List<QuizAttempt> quizzattempts = new ArrayList<>();

	    public User(String username, String email, String password) {
	        this.username = username;
	        this.email = email;
	        this.password = password;
	    }

	    public User(String username, String email, String password, ERole role) {
	        this.username = username;
	        this.email = email;
	        this.password = password;
	        this.role = role;
	    }


	@Setter
	@Getter
	@OneToMany(mappedBy = "user")
    private Collection<Course> course;

}
