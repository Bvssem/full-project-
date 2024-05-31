package com.backendlearnify.learnifysystem.service;


import com.backendlearnify.learnifysystem.entity.Event;

import java.util.List;

public interface EventService {
    Event createEvent(Event event);
    List<Event> getAllEvents();
    Event getEventById(Long id);
    Event updateEvent(Long id, Event event);
    void deleteEventById(Long id);
    List<Event> getEventsByUserId(Long userId);

}