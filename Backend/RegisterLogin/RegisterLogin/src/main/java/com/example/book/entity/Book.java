package com.example.book.entity;
import jakarta.persistence.Column;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;

import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity

@Table(name = "books")

public class Book {

 

    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

 

    @Column(nullable = false)

    private String title;

 

    @Column(nullable = false)

    private String author;

 

    @Column(nullable = false)

    private String genre;

 

    @Column(nullable = false)

    private double price;

 

    @Column(nullable = false)

    private String imageUrl;

 

    public Book(Long id, String title, String author, String genre, double price, String imageUrl) {

        super();

        this.id = id;

        this.title = title;

        this.author = author;

        this.genre = genre;

        this.price = price;

        this.imageUrl = imageUrl;

    }

    public String getImageUrl() {

        return imageUrl;

    }

    public void setImageUrl(String imageUrl) {

        this.imageUrl = imageUrl;

    }

    public Long getId() {

        return id;

    }

    public void setId(Long id) {

        this.id = id;

    }

 
    public String getTitle() {

        return title;

    }

    public void setTitle(String title) {

        this.title = title;

    }
    
    public String getAuthor() {

        return author;

    }
    public void setAuthor(String author) {

        this.author = author;

    }
    public String getGenre() {

        return genre;

    }
    public void setGenre(String genre) {

        this.genre = genre;

    }

    public double getPrice() {

        return price;

    }
    public void setPrice(double price) {

        this.price = price;

    }
    @Override

    public String toString() {

        return "Book [id=" + id + ", title=" + title + ", author=" + author + ", genre=" + genre + ", price=" + price

                + ", imageUrl=" + imageUrl + "]";

    }
    public Book(Long id, String title, String author, String genre, double price) {

        super();
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;

    }
    public Book() {
        super();
        // TODO Auto-generated constructor stub
    }
}

 
