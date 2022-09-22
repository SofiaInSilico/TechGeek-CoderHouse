import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            let producto = cart.find(prod => prod.id === item.id)
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, cantidad:cantidad}]);
        }
        // const producto = {...item, cantidad };
        // setCart([...cart, producto]);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }
    // console.log (cart);

    const cartTotal = () => {
        return cart.reduce((total, item) => total+=item.cantidad, 0);
    }
    
    return (
        <CartContext.Provider value={{cart, addToCart, clear, isInCart}}> 
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;
//todo lo que se ponga en value, será lo que se le pasará a los children