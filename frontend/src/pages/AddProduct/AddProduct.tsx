import { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import styles from './addProduct.module.css';
import type { Product as ProductType } from "../../types/Product";
import ProductForm from "../../components/ProductForm/ProductForm";

export default function AddProduct() {
    function handleForm(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const imageEntry = formData.get('image');
        if (!imageEntry || !(imageEntry instanceof File)) {
            window.alert("please upload valid image");
            return;
        }
        const prouduct: ProductType= {
            name: formData.get('name')?.toString()!,
            brand: formData.get('brand')?.toString()!,
            price: Number(formData.get('price')),
            category: formData.get('category')?.toString()!,
            description: formData.get('description')?.toString()!,
            releaseDate: new Date(formData.get('releaseDate')?.toString()!),
            stock: Number(formData.get('stock')),
            image: imageEntry
        };
        console.log(prouduct)
        window.alert("Product added successfully");
        window.location.reload();
    }

    return (
        <>
            <Header />
            <ProductForm handleForm={handleForm}/>
        </>
    )
}