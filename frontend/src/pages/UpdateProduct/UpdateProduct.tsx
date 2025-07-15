import Header from "../../components/Header/Header";
import ProductForm from "../../components/ProductForm/ProductForm";
import type { Product as ProductType } from "../../types/Product";
import styles from './updateProduct.module.css'

export default function UpdateProduct() {
    const availableProduct: ProductType =  {
            name:"Play station 5 Pro",
            brand:"Sony",
            description: "A gaming console, which helps many soul to find peace in this chaos world",
            category: "Electronics",
            releaseDate: new Date("2018-10-10"),
            stock: 1,
            image:"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202409/66e0fd7fd9b99-sony-ps5-pro-unveiled-111631244-16x9.jpg?size=948:533", 
            price:76_800
        }
    return (
        <>
            <Header />
            <h2 className={styles.updateProduct}>Update Product</h2>
            <ProductForm productInfo={availableProduct} />
        </>
    )
}