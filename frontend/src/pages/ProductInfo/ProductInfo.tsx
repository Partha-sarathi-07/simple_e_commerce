import Header from '../../components/Header/Header';
import type { Product as ProductType } from '../../types/Product';
import styles from './productInfo.module.css';
export default function ProductInfo(props: ProductType) {

    return (
        <>
            <Header />
            <div className={styles.productInfo}>
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202409/66e0fd7fd9b99-sony-ps5-pro-unveiled-111631244-16x9.jpg?size=948:533" alt="ps5 image" />
                <div className={styles.info}>
                    <h5 className={styles.category}>{props.category}</h5>
                    <h3 className={styles.name}>{props.name}</h3>
                    <span className={styles.brand}>{props.brand}</span>
                    <h4>PRODUCT DESCRIPTION :</h4>
                    <p className={styles.description}>{props.description}</p>
                    <hr />
                    <span className={styles.price}>&#8377; {props.price}</span>
                    <button className={styles.addToCart}>Add to cart</button>
                    <span className={styles.stock}>Stock Available : {props.stock}</span>
                    <button className={styles.update}>Update</button>
                    <button className={styles.delete}>Delete</button>
                </div>
            </div>
        </>
    )
}