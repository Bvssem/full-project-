package com.backendlearnify.learnifysystem.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class CartItem {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne
	    @JsonIgnore
	    @JoinColumn(name = "cart_id")
	    private Cart cart;

	    @ManyToOne
	    @JsonBackReference
	    @JsonIgnore
	    @JoinColumn(name = "course_id")
	    private Course course;

	    private int quantity;
	    private double price;
	    
	    @ManyToOne
	    @JsonIgnore

	    @JoinColumn(name = "order_id")
	    private Order order;
	    
	    @JsonBackReference
	    @ManyToOne
	    @JsonIgnore
	    @JoinColumn(name = "user_id", nullable = false)
	    private User user;

	    

    public CartItem(Course course, int quantity) {
        this.course = course;
        this.quantity = quantity;
        this.price = course.getPrice();
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setUser(User user) {
        this.user = user;
    }  

    // Constructor

}