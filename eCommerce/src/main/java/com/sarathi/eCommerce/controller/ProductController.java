package com.sarathi.eCommerce.controller;

import com.sarathi.eCommerce.model.Product;
import com.sarathi.eCommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
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

    @PutMapping("/product/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable int id, @RequestPart("product") Product product, @RequestPart MultipartFile image) {
        try {
            Product product1 = productService.updateProduct(product, image);
            System.out.println("\n" + product.getStockQuantity() + "\n");
            return new ResponseEntity<>(product1, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable int id) {
        Optional<Product> product = productService.getProductById(id);
        if (product.isPresent()) {
            productService.deleteProduct(id);
            return new ResponseEntity<>("Deleted", HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping("/load")
    public void loadInitialData() throws IOException {
        System.out.println("enters the function");
        List<Product> products = new ArrayList<>();

        products.add(new Product(
                "AirPods Pro", "Apple", "Noise-cancelling wireless earbuds",
                new BigDecimal("249.99"), "Electronics", new Date(), true, 50,
                "/home/sarathi/Pictures/e commerce/airpods-pro.png"
        ));

        products.add(new Product(
                "Galaxy Watch 5", "Samsung", "Smartwatch with fitness tracking",
                new BigDecimal("299.99"), "Wearables", new Date(), true, 30,
                "/home/sarathi/Pictures/e commerce/backpack.webp"
        ));

        products.add(new Product(
                "Kindle Paperwhite", "Amazon", "E-reader with high-res display",
                new BigDecimal("129.99"), "Books", new Date(), true, 80,
                "/home/sarathi/Pictures/e commerce/echodot.jpg"
        ));

        products.add(new Product(
                "PS5 Controller", "Sony", "DualSense wireless controller",
                new BigDecimal("69.99"), "Gaming", new Date(), true, 40,
                "/home/sarathi/Pictures/e commerce/gaming mouse.jpg"
        ));

        products.add(new Product(
                "Xiaomi Mi Band 7", "Xiaomi", "Affordable fitness band",
                new BigDecimal("49.99"), "Wearables", new Date(), true, 100,
                "/home/sarathi/Pictures/e commerce/yogamat.avif"
        ));

        products.add(new Product(
                "Canon EOS M50", "Canon", "Mirrorless camera with 4K",
                new BigDecimal("649.99"), "Cameras", new Date(), true, 20,
                "/home/sarathi/Pictures/e commerce/dslr camera.jpg"
        ));

        productService.addAllProducts(products);

    }


}
