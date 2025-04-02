import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Product from "./pages/Product" // 👈 Add the component for the single product
import Contacts from "./pages/Contacts"
import DefaultLayout from "./layouts/DefaultLayout"

export default function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>

          <Route Component={DefaultLayout}>

            <Route path="/" Component={Home} />
            <Route path="/products" Component={Products} />
            <Route path="/products/:id" Component={Product} /> {/* 👈 rotta singola */}
            <Route path="/contacts" Component={Contacts} />

          </Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}