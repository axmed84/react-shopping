import { useShop } from "../ShopContext"

const CartProducts = () => {
    const {products, removeFromCart, total} = useShop()
    return(
        <div className="cart-products">
            <h2>Cart Products</h2>
            {products.map((producti) => (
                <div className="cart-product">
                    <div className="cart-img-title">
                    <img src={producti.urlImage} alt=""/>
                    <span>{producti.name}</span>
                    </div>
                    <span>${producti.price}</span>
                    <span className="delete" onClick={() =>removeFromCart(producti)}>Delete</span>
                </div>
            ))}
            <div className="total-price">
                <h2>Total price is ${total}</h2>
            </div>
        </div>
    )
}
export default CartProducts