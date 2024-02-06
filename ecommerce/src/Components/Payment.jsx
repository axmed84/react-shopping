import { useState } from "react"

const Payment = () => {
    const initialPayment = {
        evc: false,
        zaad: false,
        sahal: false
    }
    const[payment, setPayment] = useState(initialPayment)
    return(
        <div className="cart-payments">
            <div className={`car-payment ${payment.evc && "selected"}`} onClick={() => setPayment(
                {...initialPayment , evc: true}
            )}>
                <h3>EVC-PLUS</h3>
            </div>
            <div className={`car-payment ${payment.sahal && "selected"}`} onClick={() => setPayment(
                {...initialPayment, sahal: true}
            )}>
                <h3>Sahal</h3>
            </div>
            <div className={`car-payment ${payment.zaad && "selected"}`} onClick={() => setPayment(
                {...initialPayment, zaad: true}
            )}>
                <h3>Zaad</h3>
            </div>
            <form>
                <input type="text" className="form-control" placeholder="2526"/>
                <button className="btn-proceed">Proceed</button>
            </form>
        </div>
    )
}
export default Payment