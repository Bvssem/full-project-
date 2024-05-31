package com.backendlearnify.learnifysystem.service;

import java.util.List;

import com.backendlearnify.learnifysystem.entity.Announcements;

public interface Announcementsservice {
    void saveAnnouncement(Announcements announcement);
    Announcements getAnnouncementById(Long id);
    void updateAnnouncement(Announcements announcement);
    void deleteAnnouncementById(Long id);
    List<Announcements> getAllAnnouncements();
    List<Announcements> getAnnouncementsByUserId(Long userId);


}