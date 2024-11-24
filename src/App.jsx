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

function App({ user, userData }) {
  const routesItems = [
    { path: '/cart', element: <Cart /> },
    { path: '/wishlist', element: <Wishlist /> },
    { path: '/privacy-policy', element: <PrivacyPolicy /> },
    { path: '/jewel-care', element: <JewelCare /> },
    { path: '/account', element: <Account /> },
  ];

  const dispatch = useDispatch()

  useEffect(() => {
    (async function get() {
      const { csrfToken } = await sendRequest({ url: '/register' });
      localStorage.setItem("csrfToken", csrfToken);

    })()
  }, [])

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
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound404 />} />
        <Route path='/products' element={<ProductCategories />} />
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
