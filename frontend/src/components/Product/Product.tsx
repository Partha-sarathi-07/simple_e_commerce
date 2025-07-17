import { useNavigate } from "react-router-dom";
import type { Product as ProductType } from "../../types/Product";
import styles from './product.module.css'
import axios from "axios";

export default function Product (props: ProductType) {
        const navigate = useNavigate();
        async function handleClick() {
            console.log("clicked");
            try {
                const response = await axios.get(`http://localhost:8080/api/product/${props.id}`)
                navigate("/productInfo", {state: response.data})
            }
            catch(err) {
                console.log("hiii");
                console.error(err)
            }
        }

    return (
        <div onClick={handleClick} className = {styles.productCard}>
            <img src={props.image} alt="product image" />
            <h5 className={styles.name}>{props.name.toUpperCase()}</h5>
            <span className={styles.brand}>~ {props.brand.toLowerCase()}</span>
            <span className={styles.price}>&#8377; {props.price}</span>
            <div className={styles.button}>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}