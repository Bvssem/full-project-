package com.backendlearnify.learnifysystem.controller;
import java.util.List;
import java.util.stream.Collectors;
import com.backendlearnify.learnifysystem.entity.Event;
import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.service.EventService;
import com.backendlearnify.learnifysystem.service.Userservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;
    
    @Autowired
    private Userservice userService;

    @PostMapping("/create")
    public ResponseEntity<Event> createEvent(@RequestBody Event event, @RequestParam Long userId) {
        User user = userService.findById(userId);
        if (user != null) {
            event.setUser(user);
            Event createdEvent = eventService.createEvent(event);
            return ResponseEntity.ok(createdEvent);
        } else {
            return ResponseEntity.badRequest().body(null); // User not found
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }
    
    @GetMapping("/approved")
    public ResponseEntity<List<Event>> getApprovedEvents() {
        List<Event> approvedEvents = eventService.getAllEvents().stream()
                .filter(Event::isIsapprooved) // Assuming there's a method isApproved() in the Event class
                .collect(Collectors.toList());
        return ResponseEntity.ok(approvedEvents);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Event event = eventService.getEventById(id);
        if (event != null) {
            return ResponseEntity.ok(event);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Event>> getEventsByUserId(@PathVariable Long userId) {
        List<Event> events = eventService.getEventsByUserId(userId);
        return ResponseEntity.ok(events);
    }
}