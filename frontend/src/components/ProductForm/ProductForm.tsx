import { useRef, useState } from 'react';
import styles from './productForm.module.css'
import type { Product as ProductType } from '../../types/Product';

type propForm = {
    handleForm?(event:React.FormEvent<HTMLFormElement>):void
    productInfo?: ProductType
}
export default function ProductForm(props: propForm) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string>(props.productInfo?.imageName!);;
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const categories = ["Laptop", "Headphone", 'Mobile', "Electronics", "Toys", "Fashion"];
    let [selectedCategory, setSelectedCategory] = useState<string>("Select Category");
    function selectFile() {
        fileInputRef.current?.click();        
    }
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file.name);
        }
    }

    function imageUploadElement() {
        return image ?
            <p>{image}</p>
            :
            <p>No file chosen</p>
    }
    let date;
    if (props.productInfo) {
        const [day, month, year] = props.productInfo?.releaseDate?.toString().split('-')!;
        const dateString: Date = new Date(`${year}-${month}-${day}`)
        date = dateString.toISOString().split('T')[0];
    }


    return (
            <main className={styles.addProduct}>
                <form className={styles.productForm} onSubmit={props.handleForm}>
                    <label className={styles.name}>
                        <span>Name</span>
                        <input 
                            type="text" 
                            name="name" 
                            defaultValue={props.productInfo?.name}
                            required
                        />
                    </label>
                    <label className={styles.brand}>
                        <span>Brand</span>
                        <input 
                            type="text" 
                            name="brand" 
                            defaultValue={props.productInfo?.brand}
                            required
                        />
                    </label>
                    <label className={styles.description}>
                        <span>Description</span>
                        <input 
                            type="text" 
                            name="description" 
                            defaultValue={props.productInfo?.description}
                            required
                        />
                    </label>
                    <label className={styles.price}>
                        <span>Price</span>
                        <input
                        type="number" 
                        name="price" 
                        defaultValue={props.productInfo?.price}
                        required
                    />
                    </label>
                    <label className={styles.category}>
                        <span>Category</span>
                        <input
                            type="text" 
                            name="category" 
                            defaultValue={props.productInfo? props.productInfo.category: selectedCategory}
                            onClick={() => setIsClicked(!isClicked)}
                            required
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
                        <input 
                            type="number" 
                            name="stockQuantity" 
                            defaultValue={props.productInfo?.stockQuantity}
                            required
                        />
                        <label>
                            <input type="checkbox" name="isProductAvailable"/>
                            <span>Product Available</span>
                        </label>
                    </label>
                    <label className={styles.releaseDate}>
                        <span>Release Date</span>
                        <input 
                        type="date" 
                        name="releaseDate" 
                        defaultValue={date}
                        required
                    />
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
                            name='image'
                            ref={fileInputRef}
                            type="file" 
                            className={styles.fileUpload}
                            onChange={handleChange}
                        />
                    </label>

                    <button className={styles.submit}>Submit</button>
                </form>

            </main>
    )
}