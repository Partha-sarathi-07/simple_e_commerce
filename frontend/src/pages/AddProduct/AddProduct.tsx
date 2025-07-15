import { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import styles from './addProduct.module.css';
import type { Product as ProductType } from "../../types/Product";

export default function AddProduct() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<File>();;
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const categories = ["Laptop", "Headphone", 'Mobile', "Electronics", "Toys", "Fashion"];
    let [selectedCategory, setSelectedCategory] = useState<string>("Select Category");

    function showCategories() {
        setIsClicked(!isClicked);
    }

    function handleForm(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const prouduct: ProductType= {
            name: formData.get('name')?.toString()!,
            brand: formData.get('brand')?.toString()!,
            price: Number(formData.get('price')),
            category: formData.get('category')?.toString()!,
            description: formData.get('description')?.toString()!,
            releaseDate: new Date(formData.get('releaseDate')?.toString()!),
            stock: Number(formData.get('stock')),
            image: image!
        };
        console.log(prouduct)
        window.alert("Product added successfully");
        window.location.reload();
    }

    function selectFile() {
        fileInputRef.current?.click();        
    }
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
        }
    }

    function imageUploadElement() {
        return image ?
            <p>{image.name}</p>
            :
            <p>No file chosen</p>
    }

    return (
        <>
            <Header />
            <main className={styles.addProduct}>
                <form className={styles.productForm} onSubmit={handleForm}>
                    <label className={styles.name}>
                        <span>Name</span>
                        <input type="text" name="name"/>
                    </label>
                    <label className={styles.brand}>
                        <span>Brand</span>
                        <input type="text" name="brand"/>
                    </label>
                    <label className={styles.description}>
                        <span>Description</span>
                        <input type="text" name="description"/>
                    </label>
                    <label className={styles.price}>
                        <span>Price</span>
                        <input type="number" name="price"/>
                    </label>
                    <label className={styles.category}>
                        <span>Category</span>
                        <input
                            type="text" 
                            name="category" 
                            value={selectedCategory}
                            onClick={() => setIsClicked(!isClicked)}
                            autoComplete="off"
                        />
                        {
                            isClicked && 
                                <ul className={styles.categoriesDropdown}>
                                    {
                                        categories.map(category => {
                                            return <li
                                                        key={category}
                                                        onClick={() => setSelectedCategory(category)}
                                                    >
                                                        {category}
                                                    </li>
                                        })
                                    }
                                </ul>
                        }
                    </label>
                    <label className={styles.stock}>
                        <span>Stock Quantity</span>
                        <input type="number" name="stock"/>
                        <label>
                            <input type="checkbox" name="isProductAvailable"/>
                            <span>Product Available</span>
                        </label>
                    </label>
                    <label className={styles.releaseDate}>
                        <span>Release Date</span>
                        <input type="date" name="releaseDate"/>
                    </label>
                    <label className={styles.image}>
                        <span>Image</span>
                        <div>
                            <button
                                type="button"
                                onClick={selectFile}
                            >
                                Choose file
                            </button>
                            <div className={styles.imagePreview}>
                                {imageUploadElement()}
                            </div>
                        </div>
                        <input
                            ref={fileInputRef}
                            type="file" 
                            className={styles.fileUpload}
                            onChange={handleChange}
                        />
                    </label>

                    <button className={styles.submit}>Submit</button>
                </form>
            </main>
        </>
    )
}