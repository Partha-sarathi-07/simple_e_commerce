import Header from "../../components/Header/Header";
import type { Product as ProductType } from "../../types/Product";
import ProductForm from "../../components/ProductForm/ProductForm";
import axios from "axios";

export default function AddProduct() {
    async function handleForm(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const image = formData.get('image');
        if (!image || !(image instanceof File)) {
            window.alert("please upload valid image");
            return;
        }
        const product: ProductType= {
            name: formData.get('name')?.toString()!,
            brand: formData.get('brand')?.toString()!,
            price: Number(formData.get('price')),
            category: formData.get('category')?.toString()!,
            description: formData.get('description')?.toString()!,
            releaseDate: new Date(formData.get('releaseDate')?.toString()!),
            stockQuantity: Number(formData.get('stock')),
        };

        const multipartFormData = new FormData();
        multipartFormData.append("product", new Blob([JSON.stringify(product)], {type: "application/json"}))
        multipartFormData.append("image", image);
        console.log("working")
        const response = await axios.post("http://localhost:8080/api/product", multipartFormData)
        if (response.status == 500) {
            window.alert("internal server error")
            
            return;
        }
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