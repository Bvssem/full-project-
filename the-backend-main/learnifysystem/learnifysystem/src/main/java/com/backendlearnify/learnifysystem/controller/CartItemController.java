package com.backendlearnify.learnifysystem.controller;

import com.backendlearnify.learnifysystem.entity.CartItem;
import com.backendlearnify.learnifysystem.service.CartItemService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/cart")
public class CartItemController {
    @Autowired
    private CartItemService cartItemService;

    @PostMapping("/add")
    public CartItem addCartItem(@RequestParam Long courseId, @RequestParam Long userId, @RequestParam int quantity) {
        return cartItemService.addCartItem(courseId, userId, quantity);
    }
    
    @GetMapping("/items")
    public List<CartItem> getAllCartItems() {
        return cartItemService.getAllCartItems();
    }
    
    @GetMapping("/items/{userId}")
    public List<CartItem> getAllCartItemsByUserId(@PathVariable Long userId) {
        return cartItemService.getAllCartItemsByUserId(userId);
    }
}