package com.backendlearnify.learnifysystem.controller;

import com.backendlearnify.learnifysystem.entity.Order;
import com.backendlearnify.learnifysystem.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/checkout/{userId}")
    public Order placeOrder(@RequestBody OrderRequest orderRequest,@PathVariable Long userId) {
        return orderService.placeOrder(
            orderRequest.getFirstName(),
            orderRequest.getLastName(),
            orderRequest.getEmailAddress(),
            orderRequest.getPhoneNumber(),
            orderRequest.getCompanyName(),
            orderRequest.getAddress(),
            orderRequest.getCountry(),
            orderRequest.getCity(),
            orderRequest.getState(),
            orderRequest.getZipCode(),
            orderRequest.getPaymentMethod(),
            userId
        );
    }
    
    

}
