package com.backendlearnify.learnifysystem.controller;

import com.backendlearnify.learnifysystem.DTO.AnnouncementDetailsDTO;
import com.backendlearnify.learnifysystem.entity.Announcements;
import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.service.Announcementsservice;
import com.backendlearnify.learnifysystem.service.Userservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/announcements")
public class AnnouncementsController {
    private final Announcementsservice announcementsService;
    private final Userservice userService;

    @Autowired
    public AnnouncementsController(Announcementsservice announcementsService, Userservice userService) {
        this.announcementsService = announcementsService;
        this.userService = userService;
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveAnnouncement(@RequestBody Announcements announcement, @RequestParam Long userId) {
        User user = userService.findById(userId);
        if (user != null) {
            announcement.setUser(user);
            announcementsService.saveAnnouncement(announcement);
            return new ResponseEntity<>("Announcement saved successfully", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Announcements> getAnnouncementById(@PathVariable Long id) {
        Announcements announcement = announcementsService.getAnnouncementById(id);
        if (announcement != null) {
            return new ResponseEntity<>(announcement, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateAnnouncement(@RequestBody Announcements announcement) {
        announcementsService.updateAnnouncement(announcement);
        return new ResponseEntity<>("Announcement updated successfully", HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAnnouncementById(@PathVariable Long id) {
        announcementsService.deleteAnnouncementById(id);
        return new ResponseEntity<>("Announcement deleted successfully", HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<AnnouncementDetailsDTO>> getAllAnnouncementsWithUsernameAndDate() {
        List<Announcements> announcements = announcementsService.getAllAnnouncements();
        List<AnnouncementDetailsDTO> announcementDetailsDTOs = new ArrayList<>();
        for (Announcements announcement : announcements) {
            User user = announcement.getUser();
            announcementDetailsDTOs.add(new AnnouncementDetailsDTO(announcement.getAnnouncement(), user.getUsername(), announcement.getDate()));
        }
        return new ResponseEntity<>(announcementDetailsDTOs, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Announcements>> getAnnouncementsByUserId(@PathVariable Long userId) {
        List<Announcements> announcements = announcementsService.getAnnouncementsByUserId(userId);
        return new ResponseEntity<>(announcements, HttpStatus.OK);
    }
}
