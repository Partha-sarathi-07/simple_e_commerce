import type { Product as ProductType } from "../../types/Product";
import styles from './product.module.css'

export default function Product (props: ProductType) {
        // {
        //     name:"Play station 5",
        //     brand:"Sony",
        //     image:"https://hitechgamez.in/wp-content/uploads/schema-and-structured-data-for-wp/ps5-slim-digital-edition-1200x900.webp", 
        //     price:54_990
        // }
    return (
        <div className = {styles.productCard}>
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