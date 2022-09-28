import React from "react";

export const ThemeContext = createContext ();
const ContextPorvider = () => {
    const [isDarkMode, setDarkMode] = useState('si');
}
const cambiarEstado = (valor) => {
    setDarkMode(valor);
}

return (
    <ThemeContext.Provider value={{isDarkMode, cambiarEstado}}>
   <Consumer2 />     
    </ThemeContext.Provider>
)