import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Product from "./pages/Product" // 👈 Add the component for the single product
import Contacts from "./pages/Contacts"
import DefaultLayout from "./layouts/DefaultLayout"
import NotFound from './pages/NotFound'
import { ProductsProvider, useFetchProducts } from "./contexts/productContext"


export default function App() {


  const products = useFetchProducts()

  return (
    <>
      <ProductsProvider products={products}>
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
      </ProductsProvider>
    </>
  )
}