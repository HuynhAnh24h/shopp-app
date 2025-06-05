import {createContext, useState} from 'react'

// Khởi tạo 1 context cho giỏ hàng
export const CartContext = createContext()

// Tạo component wrapper, bao bọc các componentcon để có thể truy cập cart context
export function CartProvider({children}) {

    // Quản lý trạng thái của giỏ hàng
    const [cart,setCart] = useState([])

    const addTocart = (product)=>{
        // Cập nhật trạng thái thêm vào giỏ hàng
        setCart([...cart,product])
    }

    // update delete giỏ hàng

    // update mua hàng 

    return(
        // Cung cấp cart context cho các component con
        <CartContext.Provider value={{cart,addTocart}}>
            {children}
        </CartContext.Provider>
    )
}