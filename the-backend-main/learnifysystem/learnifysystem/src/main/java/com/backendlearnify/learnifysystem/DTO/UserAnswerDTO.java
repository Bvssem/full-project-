package com.backendlearnify.learnifysystem.DTO;

public class UserAnswerDTO {
    private Long id;
    private String answer;
    private Long userId;
    private String username; // If you also want to include the username

    // Constructors
    public UserAnswerDTO() {
    }

    public UserAnswerDTO(Long id, String answer, Long userId, String username) {
        this.id = id;
        this.answer = answer;
        this.userId = userId;
        this.username = username;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    } }
