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

function App() {
  const routesItems = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/products', element: <ProductCategories /> },
    { path: '/cart', element: <Cart /> },
    { path: '/product', element: <ProductPage /> },
    { path: '*', element: <NotFound404 /> },
    { path: '/wishlist', element: <Wishlist /> }
  ]

  return (
    <>
      <Navbar />
      <Routes>
        {routesItems.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </>
  )
}

export default App
