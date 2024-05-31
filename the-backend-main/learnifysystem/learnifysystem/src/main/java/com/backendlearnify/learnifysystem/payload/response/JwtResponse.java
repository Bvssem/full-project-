package com.backendlearnify.learnifysystem.payload.response;

import java.util.Map;

import com.backendlearnify.learnifysystem.payload.request.LoginRequest;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {
	private String token;
    private String type = "Bearer";
    private String role; 
    Map<String, Object> userData ;

    public JwtResponse(String accessToken, String role) {
        this.token = accessToken;
        this.role = role;
    }

	public JwtResponse(String token, Map<String, Object> userData) {
		super();
		this.token = token;
		this.userData = userData;
	}
}
