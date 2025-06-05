import React from 'react'
import { AuthProvider } from '../context/AuthContext'
import { AdminHeader, AdminSidebar } from '../components'

const AdminLayout = ({children}) => {
  return (
    <AuthProvider>
        <div className="flex h-screen">
                <AdminSidebar/>
                <div className="flex-1 flex flex-col">
                    <AdminHeader/>
                    <main className="flex-1 p-4 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
    </AuthProvider>
  )
}

export default AdminLayout