package com.backendlearnify.learnifysystem.service;

import com.backendlearnify.learnifysystem.entity.Event;
import com.backendlearnify.learnifysystem.repository.EventRepository;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @Override
    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElse(null);
    }
    
    @Override
    public Event updateEvent(Long id, Event updatedEvent) {
        Event existingEvent = eventRepository.findById(id).orElse(null);
        if (existingEvent != null) {
            // Update existing event properties with new values
            existingEvent.setEventTitle(updatedEvent.getEventTitle());
            existingEvent.setEventContent(updatedEvent.getEventContent());
            existingEvent.setMaximumStudents(updatedEvent.getMaximumStudents());
            existingEvent.setDifficultyLevel(updatedEvent.getDifficultyLevel());
            existingEvent.setEventThumbnail(updatedEvent.getEventThumbnail());
            existingEvent.setEventIntroVideo(updatedEvent.getEventIntroVideo());
            existingEvent.setStartDate(updatedEvent.getStartDate());
            existingEvent.setStartTime(updatedEvent.getStartTime());
            existingEvent.setCertificate(updatedEvent.getCertificate());
            return eventRepository.save(existingEvent);
        } else {
            return null; // Event with given id not found
        }
    }

    @Override
    public void deleteEventById(Long id) {
        eventRepository.deleteById(id);
    }
    
    @Override
    public List<Event> getEventsByUserId(Long userId) {
        return eventRepository.findByUserId(userId);
    }
}