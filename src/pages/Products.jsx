import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([])


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setProducts(data)
      })
  }, [])


  return (
    <>

      <main>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-1 fw-bold">Our Products</h1>
            <p className="col-md-8 fs-4">
              Explore our wide range of products below. Find something you love and grab it now!
            </p>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
              {products.map(product => (
                <div className="col" key={product.id}>
                  <div className="card h-100">
                    <Link to={`/products/${product.id}`}>
                      <img src={product.image} className="card-img-top" alt={product.title}
                        style={{ aspectRatio: 1, objectFit: 'cover' }} />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.price}</p>
                      {/* Add a link to navigate to the single product page */}
                      <Link to={`/products/${product.id}`} className="btn btn-primary">
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>


    </>
  )
}