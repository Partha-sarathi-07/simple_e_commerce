import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductForm from "../../components/ProductForm/ProductForm";
import type { Product as ProductType } from "../../types/Product";
import styles from './updateProduct.module.css'
import type { FormEvent } from "react";
import axios from "axios";

export default function UpdateProduct() {
    const location = useLocation();
    const { id } = useParams();
    const {product} = location.state as {product: ProductType};
    const navigate = useNavigate();

    async function handleForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const image = formData.get('image'); 
        if (!image || !(image instanceof File)) {
            window.alert("Please upload valid image")
            return;
        }
        const product: ProductType = {
            id: Number(id),
            brand: formData.get('brand')?.toString()!,
            name: formData.get('name')?.toString()!,
            price: Number(formData.get('price')),
            category: formData.get('category')?.toString()!,
            description: formData.get('description')?.toString()!,
            releaseDate: new Date(formData.get('releaseDate')?.toString()!),
            stockQuantity: Number(formData.get('stockQuantity'))
        }
        console.log(product.stockQuantity);
        const multipartFormData = new FormData();
        multipartFormData.append('product', new Blob([JSON.stringify(product)], {type: "application/json"}))
        multipartFormData.append('image', image);

        axios.put(`http://localhost:8080/api/product/${id}`, multipartFormData)
            .then(response => { 
                if (response.status === 200)
                    window.alert("Product updated successfully");
            })
            .catch(e => window.alert("something went wronng " + e));
        
        navigate(`/productInfo/${id}`);
        
    }

    return (
        <>
            <Header />
            <h2 className={styles.updateProduct}>Update Product</h2>
            <ProductForm 
                productInfo={ product }
                handleForm={ handleForm }
            />
        </>
    )
}