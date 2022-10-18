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
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
    };

    const cartTotal = () => {
        return cart.reduce((total, item) => total+=item.cantidad, 0);
    }
    const precioFinal = () => {
        return cart.reduce((total, item) => total+=item.cantidad*item.price, 0);
    }
    
    return (
        <CartContext.Provider value={{cart, addToCart, clear, isInCart, cartTotal, deleteOne, precioFinal}}> 
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;
