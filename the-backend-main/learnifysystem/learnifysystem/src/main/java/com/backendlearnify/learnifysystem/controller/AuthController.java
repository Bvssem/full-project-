package com.backendlearnify.learnifysystem.controller;

import com.backendlearnify.learnifysystem.payload.request.LoginRequest;
import com.backendlearnify.learnifysystem.payload.request.SignupRequest;
import com.backendlearnify.learnifysystem.payload.response.JwtResponse;
import com.backendlearnify.learnifysystem.payload.response.MessageResponse;
import com.backendlearnify.learnifysystem.entity.ERole;
import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.repository.Userrepository;
import com.backendlearnify.learnifysystem.security.jwt.JwtUtils;
import com.backendlearnify.learnifysystem.security.services.UserDetailsImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    Userrepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        String jwt = jwtUtils.generateJwtToken(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String role = userDetails.getAuthorities().stream()
                .findFirst()
                .map(Object::toString)
                .orElse(null);
        
        // Get additional user data
        Long userId = userDetails.getId();
        String username = userDetails.getUsername();
        String email = userDetails.getEmail();
       
        // Create a map to include all user data in the JWT response
        Map<String, Object> userData = new HashMap<>();
        userData.put("id", userId);
        userData.put("username", username);
        userData.put("email", email);
        userData.put("role", role);
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            userData.put("approved", user.isApproved());
        } else {
            // Handle the case where user is not found by ID
        }


        // Include user data in the JWT response
        JwtResponse jwtResponse = new JwtResponse(jwt, userData);

        return ResponseEntity.ok(jwtResponse);
    }


    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),
                signUpRequest.getRole());

        if (signUpRequest.getRole() == ERole.ROLE_INSTRUCTOR && signUpRequest.getCvUrl() != null) {
            user.setCvUrl(signUpRequest.getCvUrl());
        }

        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
    
    
    @GetMapping("/user")
    public ResponseEntity<?> getCurrentUser(Authentication authentication) {
    	System.out.println(authentication);

        if (authentication == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new MessageResponse("Error: Unauthorized"));
        }

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        Long userId = userDetails.getId(); // Assuming getId() returns the user ID
        String username = userDetails.getUsername();
        String email = userDetails.getEmail();
        String role = userDetails.getAuthorities().stream()
                .findFirst()
                .map(Object::toString)
                .orElse(null);

        Map<String, Object> currentUserDetails = new HashMap<>();
        currentUserDetails.put("id", userId);
        currentUserDetails.put("username", username);
        currentUserDetails.put("email", email);
        currentUserDetails.put("role", role);
System.out.println(currentUserDetails);
        return ResponseEntity.ok(currentUserDetails);
    }
}
