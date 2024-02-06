import { Link } from "react-router-dom"
import "../style.css"
import { useShop } from "../ShopContext"
const Header = () => {
    const {products} = useShop()
    return(
        <div className="menu">
            <Link to="/" className="logo">Reactify</Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Cart">Cart</Link>
            </div>
            <Link to="/cart" className="cart">{products.length}</Link>
        </div>
    )
}
export default Header