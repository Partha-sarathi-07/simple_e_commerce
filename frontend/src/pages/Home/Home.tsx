import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Product from '../../components/Product/Product'
import type { Product as ProductType } from '../../types/Product'
import styles from './home.module.css'
import axios from 'axios'
export default function Home() {
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        axios.get("http://localhost:8080/api/products")
            .then(response => setProducts(response.data))

        const lastData = products[products.length - 1];
        axios.get(`http://localhost:8080/api/${lastData.id}/image`)
            .then(response => lastData.image = response.data)
        
        console.log(lastData.image);
    }, [])

    const productElements = products.map(product => 
        <Product key={product.id} {...product}/>
    )
    return (
        <>
            <Header />
            <main className={styles.productsContainer}>
                {productElements}
            </main>
        </>
    )
}