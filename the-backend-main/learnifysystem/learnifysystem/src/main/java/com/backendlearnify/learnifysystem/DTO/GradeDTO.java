package com.backendlearnify.learnifysystem.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class GradeDTO {
    private Long id;
    private int score;
    private String assignmentTitle;
    private String userName;
	public GradeDTO(Long id, int score, String assignmentTitle, String userName) {
		super();
		this.id = id;
		this.score = score;
		this.assignmentTitle = assignmentTitle;
		this.userName = userName;
	}
    
    
}
