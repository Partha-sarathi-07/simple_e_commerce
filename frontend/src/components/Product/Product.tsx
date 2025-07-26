import { useNavigate } from "react-router-dom";
import type { Product as ProductType } from "../../types/Product";
import styles from './product.module.css'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Product (props: ProductType) {
        const navigate = useNavigate();
        const [imageUrl, setImageUrl] = useState<string>();

        useEffect(() => {
            const url = URL.createObjectURL(props.image!)
            setImageUrl(url)
            return () => URL.revokeObjectURL(url);
        }, [])

        async function handleClick() {
            try {
                const response = (await axios.get(`http://localhost:8080/api/product/${props.id}`)).data
                const image = (await axios.get(`http://localhost:8080/api/product/${props.id}/image`, 
                    {responseType: "blob"})).data;
                const product: ProductType = {...response, image: image};
                navigate(`/productInfo/${product.id}`, {state: { product }})
            }
            catch(err) {
                console.log("hiii");
                console.error(err)
            }
        }

    return (
        <div onClick={handleClick} className = {styles.productCard}>
            <img src={imageUrl} alt="product image" />
            <h5 className={styles.name}>{props.name.toUpperCase()}</h5>
            <span className={styles.brand}>~ {props.brand.toLowerCase()}</span>
            <span className={styles.price}>$ {props.price}</span>
            <div className={styles.button}>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}