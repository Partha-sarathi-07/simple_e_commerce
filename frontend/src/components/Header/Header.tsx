import styles from './header.module.css';
import  cartIcon  from '../../assets/cart.ico';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.options}>
                <li><img src={logo} alt="app logo" /></li>
                <li>Home</li>
                <li>Add Product</li>
                <li className={styles.dropdown}>
                    <a href="#home">Categories ▼</a>
                    <ul>
                        <li><a href="#home">Laptop</a></li>
                        <li><a href="#home">Headphone</a></li>
                        <li><a href="#home">Mobile</a></li>
                        <li><a href="#home">Electronics</a></li>
                        <li><a href="#home">Toys</a></li>
                        <li><a href="#home">Fashion</a></li>
                    </ul>
                </li>
            </ul>
            <div className={styles.cartAndSearch}>
                <div className={styles.cart}>
                    <img src={cartIcon} alt="cart icon" />
                    <span>Cart</span>
                </div>
                <input type="text" placeholder='search'/>
            </div>

        </header>
    )
}