import React from 'react'
import { AuthProvider } from '../context/AuthContext'
import { CartProvider } from '../context/CartContext'
import { ProductProvider } from '../context/ProductContext'
import { Footer, Header, Topbar } from '../components'

const MainLayout = ({children}) => {
  return (
    <AuthProvider>
        <CartProvider>
            <ProductProvider>
                <>
                    <Topbar/>
                    <Header/>
                        {children}
                    <Footer/>
                </>
            </ProductProvider>
        </CartProvider>
    </AuthProvider>
  )
}

export default MainLayout