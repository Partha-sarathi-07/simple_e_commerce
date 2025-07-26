import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import type { Product as ProductType } from '../../types/Product';
import styles from './productInfo.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function ProductInfo() {
    const location = useLocation();
    const [product, setProduct] = useState<ProductType | null>(() => {
        if (location.state && (location.state as {product: ProductType}).product)
            return (location.state as {product: ProductType}).product
        return null;
    })
    let imageUrl: string | undefined = undefined;
    if (product)
        imageUrl = URL.createObjectURL(product.image!)
    const { id } = useParams();
    useEffect(() => {

        if (product === null) {
            
            async function fetchData() {
                const response = (await axios.get(`http://localhost:8080/api/product/${id}`)).data;
                const image = (await axios.get(`http://localhost:8080/api/product/${id}/image`, 
                        {responseType: "blob"})).data;
                imageUrl = URL.createObjectURL(image)
                setProduct({...response, image: image})

            }

            fetchData();
        }
        return () => URL.revokeObjectURL(imageUrl!);
    }, [])
    const navigate = useNavigate();
    function handleUpdate() {
        navigate(`/updateProduct/${id}`, {state: { product }})
    }

    function handleDelete() {
        axios.delete(`http://localhost:8080/api/product/${id}`)
            .then(response => {
                if (response.status == 200)
                    window.alert('Product added successfully')
            })
            .catch(error => window.alert(error))
    }
    return (
        <>
            <Header />
            { product && 
                <div className={styles.productInfo}>
                    {imageUrl && 
                        <img src={imageUrl} alt="ps5 image" />
                    }

                    {/* <img src="" alt="ps5 image" /> */}
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
            }
        </>
    )
}