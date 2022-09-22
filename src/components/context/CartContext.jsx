import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        const producto = {...item, cantidad };
        setCart([...cart, producto]);
    };
    console.log (cart);
    
    return (
        <CartContext.Provider value={{cart, addToCart}}> 
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;
//todo lo que se ponga en value, será lo que se le pasará a los children