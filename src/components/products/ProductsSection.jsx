import { useContext } from "react";
import ProductContext from "../../contexts/productContext";
import ProductsGrid from "./ProductsGrid"

export default function ProductsSection() {

  const { products } = useContext(ProductContext)

  return (
    <section>
      <div className="container">

        <ProductsGrid products={products} />

        <div>
          Total Products on this page: {products.length}
        </div>
      </div>
    </section>
  )
}


/* const { products } = { products: [{}, {}, {}] }

console.log(products); //[{},{},{}]

const [name, setName] = useState('Fabio') */