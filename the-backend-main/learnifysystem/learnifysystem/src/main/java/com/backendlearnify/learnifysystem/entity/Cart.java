package com.backendlearnify.learnifysystem.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
    private List<CartItem> items;

    private double subtotal;

   

    public Cart(List<CartItem> items) {
        this.items = items;
        this.subtotal = calculateSubtotal();
    }

    private double calculateSubtotal() {
        return items.stream().mapToDouble(item -> item.getPrice() * item.getQuantity()).sum();
    }

    // Getters and setters...
}
