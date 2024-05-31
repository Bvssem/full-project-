package com.backendlearnify.learnifysystem.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
@Data
@AllArgsConstructor
@Entity
public class Event {
    // Getters and Setters
    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String eventTitle;
    private String code;
    private String content;
    private String eventContent;
    private int maximumStudents;
    private String difficultyLevel;
    private String eventThumbnail;
    private String eventIntroVideo;
    private Date startDate;
    private String startTime;
    private String certificate;
    private boolean isapprooved=false ; 
    @JsonBackReference
    

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Event(String code) {
        this.code = code;
    }

    public Event() {

    }

    public String getEventTitle() {
        return eventTitle;
    }

    public void setEventTitle(String eventTitle) {
        this.eventTitle = eventTitle;
    }

    public String getEventContent() {
        return eventContent;
    }

    public void setEventContent(String eventContent) {
        this.eventContent = eventContent;
    }

    public int getMaximumStudents() {
        return maximumStudents;
    }

    public void setMaximumStudents(int maximumStudents) {
        this.maximumStudents = maximumStudents;
    }

    public String getDifficultyLevel() {
        return difficultyLevel;
    }

    public void setDifficultyLevel(String difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public String getEventThumbnail() {
        return eventThumbnail;
    }

    public void setEventThumbnail(String eventThumbnail) {
        this.eventThumbnail = eventThumbnail;
    }

    public String getEventIntroVideo() {
        return eventIntroVideo;
    }

    public void setEventIntroVideo(String eventIntroVideo) {
        this.eventIntroVideo = eventIntroVideo;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getCertificate() {
        return certificate;
    }

    public void setCertificate(String certificate) {
        this.certificate = certificate;
    }

   

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

	@Override
	public String toString() {
		return "Event [id=" + id + ", eventTitle=" + eventTitle + ", code=" + code + ", eventContent=" + eventContent
				+ ", maximumStudents=" + maximumStudents + ", difficultyLevel=" + difficultyLevel + ", eventThumbnail="
				+ eventThumbnail + ", eventIntroVideo=" + eventIntroVideo + ", startDate=" + startDate + ", startTime="
				+ startTime + ", certificate=" + certificate + ", isapprooved=" + isapprooved + "]";
	}
}