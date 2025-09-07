import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import ProductCategories from "./pages/ProductCategories"
import Cart from "./pages/Cart"
import NotFound404 from "./pages/NotFound404"
import ProductPage from "./pages/ProductPage"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Wishlist from "./containers/Wishlist"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import JewelCare from "./pages/JewelCare"
import { connect, useDispatch } from "react-redux"
import { sendRequest } from "./utils/sendRequest";
import { useEffect } from "react";
import { user } from "./routines"
import Account from "./pages/Account"
import Authenticated from "./layout/Authenticated"
import AdminLayout from "./pages/admin"
import RefundPolicy from "./pages/RefundPolicy"

function App({ user, userData }) {
  const routesItems = [
    { path: '/cart', element: <Cart /> },
    { path: '/wishlist', element: <Wishlist /> },
    { path: '/account', element: <Account /> },
  ];

  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Authenticated />}>
          {routesItems.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin/*' element={<AdminLayout user={userData} />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound404 />} />
        <Route path='/products/:category?' element={<ProductCategories />} />
        <Route path='/jewel-care' element={<JewelCare />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/refund-policy' element={<RefundPolicy />} />
        <Route path='/product/:id' element={<ProductPage />} />

      </Routes>
      <Footer />
    </>
  )
}
const mapStateToProps = ({ user }) => {

  return { userData: user }
}

const mapDispatchToProps = {
  user
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
