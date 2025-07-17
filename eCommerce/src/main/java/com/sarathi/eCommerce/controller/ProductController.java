package com.sarathi.eCommerce.controller;

import com.sarathi.eCommerce.model.Product;
import com.sarathi.eCommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getProducts() {
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable("productId") int productId) {
//        return  productService.getProductById(productId)
//                .map(product -> new ResponseEntity<Product>(product, HttpStatus.OK))
//                .orElse(new ResponseEntity<Product>(HttpStatus.NOT_FOUND));
        return  ResponseEntity.of(productService.getProductById(productId));
    }

    @GetMapping("/product/{id}/image")
    public ResponseEntity<byte[]> getProductImage(@PathVariable int id) {
        return productService.getProductById(id)
                .map(product -> new ResponseEntity<>(product.getImageData(), HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/product")
    public ResponseEntity<?> addProduct(@RequestPart("product") Product product, @RequestPart MultipartFile image) {
        try {
            System.out.println(image.getName());
            Product product1 = productService.addProduct(product, image);
            return new ResponseEntity<Product>(product1, HttpStatus.OK);
        }
        catch (IOException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
