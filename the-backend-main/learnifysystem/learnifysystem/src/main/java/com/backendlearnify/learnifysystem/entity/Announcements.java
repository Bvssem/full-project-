package com.backendlearnify.learnifysystem.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@AllArgsConstructor
@Entity
public class Announcements {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Temporal(TemporalType.DATE)
	    private Date date;

	    private String announcement;

	    @JsonBackReference
	    @ManyToOne
	    @JoinColumn(name = "user_id", nullable = false)
	    private User user;

    public Announcements() {
    }

    public Announcements(Date date, String announcement, User user) {
        this.date = date;
        this.announcement = announcement;
        this.user = user;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getAnnouncement() {
        return announcement;
    }

    public void setAnnouncement(String announcement) {
        this.announcement = announcement;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
