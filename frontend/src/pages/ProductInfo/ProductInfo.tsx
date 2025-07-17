import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import type { Product as ProductType } from '../../types/Product';
import styles from './productInfo.module.css';
import UpdateProduct from '../UpdateProduct/UpdateProduct';
export default function ProductInfo() {
    const navigate = useNavigate();
    function handleUpdate() {
        navigate("/updateProduct")
    }

    function handleDelete() {

    }
    const location = useLocation();
    const product = location.state as ProductType
    return (
        <>
            <Header />
            <div className={styles.productInfo}>
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202409/66e0fd7fd9b99-sony-ps5-pro-unveiled-111631244-16x9.jpg?size=948:533" alt="ps5 image" />
                <div className={styles.info}>
                    <h5 className={styles.category}>{product.category}</h5>
                    <h3 className={styles.name}>{product.name}</h3>
                    <span className={styles.brand}>{product.brand}</span>
                    <h4>PRODUCT DESCRIPTION :</h4>
                    <p className={styles.description}>{product.description}</p>
                    <hr />
                    <span className={styles.price}>$ {product.price}</span>
                    <button className={styles.addToCart}>Add to cart</button>
                    <span className={styles.stock}>Stock Available : {product.stockQuantity}</span>
                    <button 
                        className={styles.update}
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                    <button 
                        className={styles.delete}
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}