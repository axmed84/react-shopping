import CartProducts from "../Components/CartProducts"
import Payment from "../Components/Payment"

const Cart = () => {
    return(
        <div className="cart-container">
        <CartProducts />
        <Payment />
        </div>
    )
}
export default Cart