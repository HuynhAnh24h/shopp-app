import { Routes, Route } from "react-router-dom"
import { AdminLayout, MainLayout } from "./layouts"

// Import Public Page
import { 
  Home,
  About, 
  Auth, 
  Blog, 
  Categories, 
  Product, 
  ProductDetail, 
  Contact 
} from "./pages/public"

// Import Admin Page
import { 
  Dashboard, 
  AdminAuth, 
  AdminCategories, 
  AdminCompany, 
  AdminContact, 
  AdminPayment, 
  AdminProduct, 
  AdminTheme 
} from "./pages/admin"

// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
       <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About/></MainLayout>} />
        <Route path="/auth" element={<MainLayout><Auth/></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact/></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog/></MainLayout>} />
        <Route path="/collection" element={<MainLayout><Categories/></MainLayout>} />
        <Route path="/product" element={<MainLayout><Product/></MainLayout>} />

        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={<AdminLayout><Dashboard/></AdminLayout>} />
        <Route path="/admin-theme" element={<AdminLayout><AdminTheme/></AdminLayout>} />
        <Route path="/admin-product" element={<AdminLayout><AdminProduct/></AdminLayout>} />
        <Route path="/admin-payment" element={<AdminLayout><AdminPayment/></AdminLayout>} />
        <Route path="/admin-contact" element={<AdminLayout><AdminContact/></AdminLayout>} />
        <Route path="/admin-company" element={<AdminLayout><AdminCompany/></AdminLayout>} />
        <Route path="/admin-category" element={<AdminLayout><AdminCategories/></AdminLayout>} />
        <Route path="/admin-auth" element={<AdminLayout><AdminAuth/></AdminLayout>} />
      </Routes>
  )
}

export default App