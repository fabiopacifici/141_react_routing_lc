import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductContext from "./contexts/productContext"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Product from "./pages/Product" // 👈 Add the component for the single product
import Contacts from "./pages/Contacts"
import DefaultLayout from "./layouts/DefaultLayout"
import NotFound from './pages/NotFound'
import { useAlertContext } from "./contexts/alertContext"


export default function App() {
  const [products, setProducts] = useState([])
  const { setAlert } = useAlertContext()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data)
        setAlert({ type: 'info', message: 'Products fetched successfully' })
      })
      .catch(err => {
        setAlert({
          type: 'danger',
          message: err.message
        })
      })
  }, [])


  return (
    <>
      <ProductContext.Provider value={{ products: products }}>
        <BrowserRouter>
          <Routes>

            <Route Component={DefaultLayout}>

              <Route path="/" Component={Home} />
              <Route path="/products" Component={Products} />



              <Route path="/products/:id" Component={Product} /> {/* 👈 rotta singola */}
              <Route path="/contacts" Component={Contacts} />

              {/* Route catch all */}
              <Route path="/*" Component={NotFound} />

            </Route>

          </Routes>

        </BrowserRouter>
      </ProductContext.Provider>
    </>
  )
}