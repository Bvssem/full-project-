package com.backendlearnify.learnifysystem.repository;

import com.backendlearnify.learnifysystem.entity.Announcements;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Announcementsrepository extends JpaRepository<Announcements, Long> {
    List<Announcements> findByUserId(Long userId);

}
