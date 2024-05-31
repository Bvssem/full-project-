package com.backendlearnify.learnifysystem.DTO;

import java.util.List;

public class QuizAttemptDTO {
    private Long id;
    private Long quizId;
    private List<List<Long>> answers;
    public QuizAttemptDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public QuizAttemptDTO(Long quizId, List<List<Long>> answers, int score) {
		super();
		this.quizId = quizId;
		this.answers = answers;
		this.score = score;
	}
	private int score;
	public Long getQuizId() {
		return quizId;
	}
	public void setQuizId(Long quizId) {
		this.quizId = quizId;
	}
	public List<List<Long>> getAnswers() {
		return answers;
	}
	public void setAnswers(List<List<Long>> answers) {
		this.answers = answers;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}

    // Constructors, getters, and setters
}
