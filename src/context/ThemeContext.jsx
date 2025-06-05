import { createContext,useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    return (
        <ThemeContext.Provider value={color}>
            {children}
        </ThemeContext.Provider>
    )
}