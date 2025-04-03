import { Link } from "react-router-dom";

export default function ProductsGrid({ products }) {
  return (
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
  )
}