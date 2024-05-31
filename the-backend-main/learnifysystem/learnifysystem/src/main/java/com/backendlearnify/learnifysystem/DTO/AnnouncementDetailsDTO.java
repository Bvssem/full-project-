package com.backendlearnify.learnifysystem.DTO;

import java.util.Date;

public class AnnouncementDetailsDTO {
    private String announcement;
    private String username;
    private Date date;

    // Constructor, getters, and setters
    public AnnouncementDetailsDTO(String announcement, String username, Date date) {
        this.announcement = announcement;
        this.username = username;
        this.date = date;
    }

    public String getAnnouncement() {
        return announcement;
    }

    public void setAnnouncement(String announcement) {
        this.announcement = announcement;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}