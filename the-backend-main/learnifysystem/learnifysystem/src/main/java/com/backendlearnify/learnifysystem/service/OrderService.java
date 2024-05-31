package com.backendlearnify.learnifysystem.service;

import com.backendlearnify.learnifysystem.entity.*;
import com.backendlearnify.learnifysystem.repository.CartRepository;
import com.backendlearnify.learnifysystem.repository.OrderRepository;
import com.backendlearnify.learnifysystem.repository.Userrepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

	@Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private Userrepository userRepository;

    
    public Order placeOrder(String firstName, String lastName, String emailAddress, String phoneNumber,
                            String companyName, String address, String country, String city, String state, 
                            String zipCode, String paymentMethod, Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            throw new RuntimeException("User not found");
        }

        List<CartItem> cartItems = cartItemService.getAllCartItemsByUserId(userId);

        Order order = new Order(cartItems, firstName, lastName, emailAddress, phoneNumber, companyName, address, 
                                country, city, state, zipCode, paymentMethod, user);
        return orderRepository.save(order);
    }

    
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    
    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    public List<Order> getOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }
}
