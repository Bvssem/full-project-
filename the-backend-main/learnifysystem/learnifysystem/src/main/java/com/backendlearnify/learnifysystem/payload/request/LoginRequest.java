package com.backendlearnify.learnifysystem.payload.request;

import java.util.List;

import javax.validation.constraints.NotBlank;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {
    @NotBlank
    private String username;

    @NotBlank
    private String password;
    
    

}
