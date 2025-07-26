import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Product from '../../components/Product/Product'
import type { Product as ProductType } from '../../types/Product'
import styles from './home.module.css'
import axios from 'axios'
export default function Home() {
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        async function fetchData() {
            const response:ProductType[] = (await axios.get("http://localhost:8080/api/products")).data;

            const productWithImages = await Promise.all(response.map(async (product) => {
                try {
                    const imageResponse = await axios.get(`http://localhost:8080/api/product/${product.id}/image`, {
                        responseType: 'blob',
                    })
                    return {...product, image: imageResponse.data}
                }
                catch(e) {
                    console.error(e);
                    return {...product}
                }
            }))

            setProducts(productWithImages);
        }
        fetchData();
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