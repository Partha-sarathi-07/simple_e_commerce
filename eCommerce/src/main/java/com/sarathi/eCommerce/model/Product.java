package com.sarathi.eCommerce.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String brand;
    private String description;
    private BigDecimal price;
    private String category;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date releaseDate;
    private boolean productAvailable;
    private int stockQuantity;
    private String imageName;
    private String imageType;
    @Lob
    private byte[] imageData;

    public Product(String name, String brand, String description, BigDecimal price,
                   String category, Date releaseDate, boolean productAvailable,
                   int stockQuantity, String imagePath) throws IOException {
        this.name = name;
        this.brand = brand;
        this.description = description;
        this.price = price;
        this.category = category;
        this.releaseDate = releaseDate;
        this.productAvailable = productAvailable;
        this.stockQuantity = stockQuantity;

        this.imageData = Files.readAllBytes(Paths.get(imagePath));
        this.imageName = Paths.get(imagePath).getFileName().toString();
        this.imageType = detectMimeType(imagePath);
    }
    private static String detectMimeType(String imagePath) throws IOException {
        return Files.probeContentType(Paths.get(imagePath));
    }
}
