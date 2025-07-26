package com.sarathi.eCommerce.service;

import com.sarathi.eCommerce.model.Product;
import com.sarathi.eCommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(int productId) {
        return productRepository.findById(productId);
    }

    public Product addProduct(Product product, MultipartFile image) throws IOException {
        product.setImageName(image.getName());
        product.setImageType(image.getContentType());
        product.setImageData(image.getBytes());
        return productRepository.save(product);
    }

    public void addAllProducts(List<Product> products) {
        productRepository.saveAll(products);
    }

    public Product updateProduct(Product product, MultipartFile image) throws IOException {
        product.setImageData(image.getBytes());
        product.setImageName(image.getName());
        product.setImageType(image.getContentType());
        return productRepository.save(product);
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }
}
