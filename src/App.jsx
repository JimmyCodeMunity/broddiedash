import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import AddCustomerPage from './pages/AddCustomerPage'
import ViewCustomersPage from './pages/ViewCustomersPage'
import LoginPage from './pages/LoginPage'
import AddMealPage from './pages/AddMealPage'
import AddCategoryPage from './pages/AddCategoryPage'
import ViewMealssPage from './pages/ViewMealsPage'
import ViewOrderssPage from './pages/ViewPendingOrdersPage'
import ProtectedRoutes from './context/ProtectedRoutes'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import ViewPendingOrderssPage from './pages/ViewPendingOrdersPage'
import ViewCompletedOrderssPage from './pages/ViewCompletedOrdersPage'
import ViewCategoryPage from './pages/ViewCategoryPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" index element={<HomePage />} />
          <Route  path="/profile" element={<ProfilePage />} />
          <Route  path="/system" element={<SettingsPage />} />
          <Route  path="/customers/add" element={<AddCustomerPage />} />
          <Route  path="/customers/view" element={<ViewCustomersPage />} />
          <Route  path="/meal/add" element={<AddMealPage />} />
          <Route  path="/meals/view" element={<ViewMealssPage />} />
          <Route  path="/pendingorders/view" element={<ViewPendingOrderssPage />} />
          <Route  path="/completedorders/view" element={<ViewCompletedOrderssPage />} />
          <Route  path="/category/add" element={<AddCategoryPage />} />
          <Route  path="/category/view" element={<ViewCategoryPage />} />
        </Route>
        <Route index path="/auth/login" element={<LoginPage />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
