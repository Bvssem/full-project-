package com.backendlearnify.learnifysystem.repository;

import com.backendlearnify.learnifysystem.entity.ERole;
import com.backendlearnify.learnifysystem.entity.Quiz;
import com.backendlearnify.learnifysystem.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface Userrepository extends JpaRepository<User, Long> {
    User findByUsernameAndPassword(String username, String password);
    User findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    List<User> findByRoleAndApprovedFalse(ERole role);
    long countByRole(ERole role);



}
