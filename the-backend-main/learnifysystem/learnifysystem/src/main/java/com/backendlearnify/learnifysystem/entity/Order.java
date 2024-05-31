package com.backendlearnify.learnifysystem.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders_table")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<CartItem> items;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String phoneNumber;
    private String companyName;
    private String address;
    private String country;
    private String city;
    private String state;
    private String zipCode;
    private double total;
    private String paymentMethod;
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "user_id")
    private User user;
    

    

    private double calculateTotal() {
        return items.stream().mapToDouble(item -> item.getPrice() * item.getQuantity()).sum();
    }





    public Order(List<CartItem> items, String firstName, String lastName, String emailAddress, String phoneNumber,
            String companyName, String address, String country, String city, String state, String zipCode, 
            String paymentMethod, User user) {
   this.items = items;
   this.firstName = firstName;
   this.lastName = lastName;
   this.emailAddress = emailAddress;
   this.phoneNumber = phoneNumber;
   this.companyName = companyName;
   this.address = address;
   this.country = country;
   this.city = city;
   this.state = state;
   this.zipCode = zipCode;
   this.total = this.calculateTotal();
   this.paymentMethod = paymentMethod;
   this.user = user;
}

    // Getters and setters...
}
