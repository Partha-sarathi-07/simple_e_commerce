import Header from '../../components/Header/Header'
import Product from '../../components/Product/Product'
import type { Product as ProductType } from '../../types/Product'
import styles from './home.module.css'
export default function Home() {
    const sampleProducts:ProductType[] = [
        {
            name:"Watch",
            brand:"Rolex",
            image:"https://gandgtimepieces.com/cdn/shop/files/DSC02081-Edit.jpg?v=1745248012", 
            price:80_000
        },
        {
            name:"Airpods 2nd gen pro",
            brand:"Apple",
            image:"https://m.media-amazon.com/images/I/61n7MpBGeBL._UF894,1000_QL80_.jpg", 
            price:24_000
        },
        {
            name:"Play station 5 Pro",
            brand:"Sony",
            image:"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202409/66e0fd7fd9b99-sony-ps5-pro-unveiled-111631244-16x9.jpg?size=948:533", 
            price:76_800
        },
        // {
        //     name:"Watch",
        //     brand:"Rolex",
        //     image:"https://gandgtimepieces.com/cdn/shop/files/DSC02081-Edit.jpg?v=1745248012", 
        //     price:80_000
        // },
        // {
        //     name:"Airpods 2nd gen pro",
        //     brand:"Apple",
        //     image:"https://m.media-amazon.com/images/I/61n7MpBGeBL._UF894,1000_QL80_.jpg", 
        //     price:24_000
        // },
        // {
        //     name:"Play station 5 Pro",
        //     brand:"Sony",
        //     image:"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202409/66e0fd7fd9b99-sony-ps5-pro-unveiled-111631244-16x9.jpg?size=948:533", 
        //     price:76_800
        // },
        // {
        //     name:"Watch",
        //     brand:"Rolex",
        //     image:"https://gandgtimepieces.com/cdn/shop/files/DSC02081-Edit.jpg?v=1745248012", 
        //     price:80_000
        // },
        // {
        //     name:"Airpods 2nd gen pro",
        //     brand:"Apple",
        //     image:"https://m.media-amazon.com/images/I/61n7MpBGeBL._UF894,1000_QL80_.jpg", 
        //     price:24_000
        // },
        // {
        //     name:"Play station 5 Pro",
        //     brand:"Sony",
        //     image:"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202409/66e0fd7fd9b99-sony-ps5-pro-unveiled-111631244-16x9.jpg?size=948:533", 
        //     price:76_800
        // }
    ]

    const productElements = sampleProducts.map(product => 
        <Product {...product}/>
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