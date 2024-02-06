import { createContext, useContext, useReducer } from "react";
import ShopReducer, { initialState } from "./ShopReducer";
import { type } from "@testing-library/user-event/dist/type";

const ShopContext = createContext(initialState)

export const ShopProvider = ({children}) => {
    const [state, dispatch] = useReducer(ShopReducer, initialState)
    const addToCart = (producti) => {
        const updatedProduct = state.products.concat(producti)
        totalPrice(updatedProduct)
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedProduct
            }
        })
        }

        const removeFromCart = (producti) => {
            const updatedProduct = state.products.filter(p => 
                p.id !== producti.id)
                totalPrice(updatedProduct)
                dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: {
                        products:updatedProduct
                    }
                })
        }

        const totalPrice = (products) => {
            let total = 0;
            products.forEach(pro => {
                total += pro.price
            })
            dispatch({
                type: "CALCULATE_TOTAL_PRICE",
                payload: total
            })
        }
        const values = {
            products: state.products,
            total: state.total,
            addToCart,
            removeFromCart
        }

        return <ShopContext.Provider value={values}>
            {children}
        </ShopContext.Provider>
    }

    export const useShop = () => {
        const context = useContext(ShopContext)
        if(context === undefined){
            throw new Error("Context must be used inside shopContext")
        }
        return context
    }
