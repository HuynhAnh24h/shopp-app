import {createContext,useState} from "react"

export const ProductContext = createContext()

export function ProductProvider({children}){
    const [product,setProduct] = useState([
        {id:1, name:"Laptop Gaming"},
        {id:2, name:"Điện thoại iphone"},
        {id:1, name:"Điện thoại Samsung"},
        {id:1, name:"Máy tính bảng Samsung"},
        {id:1, name:"PC Gaming"},
        {id:1, name:"PC Build"},
    ])

    return (
        <ProductContext.Provider valu={{product}}>
            {children}
        </ProductContext.Provider>
    )
}