import { createContext, useContext, useState, useEffect } from "react";
import { useAlertContext } from "./alertContext";

const ProductContext = createContext()


// create the custom provider component
function ProductsProvider({ children, products }) {

  return (
    <ProductContext.Provider value={{ products }} >
      {children}
    </ProductContext.Provider>
  )
}

// create a custom fetch hook
function useFetchProducts() {

  const [products, setProducts] = useState([])
  const { setAlert } = useAlertContext()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {

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

  return products
}
// create the custom context hook
function useProductsContext() {
  return useContext(ProductContext)
}


// export everything

export { ProductsProvider, useFetchProducts, useProductsContext }
