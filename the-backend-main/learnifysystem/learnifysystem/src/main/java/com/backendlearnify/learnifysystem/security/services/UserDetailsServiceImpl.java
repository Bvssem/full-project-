package com.backendlearnify.learnifysystem.security.services;

import com.backendlearnify.learnifysystem.entity.User;
import com.backendlearnify.learnifysystem.repository.Userrepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    Userrepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userOptional = Optional.ofNullable(userRepository.findByUsername(username));

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return UserDetailsImpl.build(user);
        } else {
            throw new UsernameNotFoundException("User Not Found with username: " + username);
        }
    }
}
