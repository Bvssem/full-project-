package com.backendlearnify.learnifysystem.repository;

import org.springframework.stereotype.Repository;

import com.backendlearnify.learnifysystem.entity.Assignment;
import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.entity.UserAnswer;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface UserAnswerRepository extends JpaRepository<UserAnswer, Long> {
    List<UserAnswer> findByQuestion_AssignmentAndUser(Assignment assignment, User user);
    List<UserAnswer> findByQuestion_Assignment(Assignment assignment);
    @Query("SELECT ua FROM UserAnswer ua WHERE ua.user.id = :userId AND ua.question.assignment.id = :assignmentId")
    List<UserAnswer> findByUserIdAndAssignmentId(@Param("userId") Long userId, @Param("assignmentId") Long assignmentId);

}
