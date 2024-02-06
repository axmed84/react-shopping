import { useEffect, useState } from "react"
import { useShop } from "../ShopContext"

const Product = ({producti}) => {
    const {addToCart, removeFromCart, products} = useShop()

    const [isInCart, setISInCart] = useState(false)

    useEffect(() => {
        const isCart = products.filter((pro) => pro.id == producti.id)
        if(isCart.length > 0){
            setISInCart(true)
        }else{
            setISInCart(false)
        }
    }, [products])
    const handleAddToCart = () => {
        if(isInCart) {
            removeFromCart(producti)
        }else{
        addToCart(producti)
        }
        console.log(products, "products")
    }
    return(
        <div className="card" style={{ 
        background:` url(${producti.urlImage})no-repeat center center/cover`}}>
            <div className="info">
            <span>{producti.name}</span>
                <span>${producti.price}</span>   
            </div>
            <button className={`btn ${isInCart ? "secondary-btn" : "primary-btn"}`} onClick={handleAddToCart}>
                {isInCart ? "-" : "+" }</button>
        </div>
    )
}
export default Product