import { useEffect, useState } from "react"
import { useParams } from "react-router-dom" // 👈 import the useParams hook 
import { useNavigate } from 'react-router-dom' // 👈 Add the import for the useNavigate hook
import { Link } from "react-router-dom"
import { useProductsContext } from '../contexts/productContext'
export default function Product() {
  const [product, setProduct] = useState(null)
  const { products } = useProductsContext()
  console.log(products);

  const navigate = useNavigate() // 👈 invoke the hook and save its result into a variable
  const { id } = useParams() // 👈 Use the object descruturing to extract the id segment


  // Perform an ajax request to the given endpoint using the provided id segment
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        // set the product data using the setProduct function
        setProduct(data)


        console.log(data);
      })
      .catch(err => {
        console.log('ERROR', err);
      })

  }, [id])



  // Get the current product index
  const currentProductIndex = products.findIndex(pr => pr.id == Number(id))
  console.log(currentProductIndex);

  // get the previous product id
  const prevProductId = currentProductIndex > 0 ? products[currentProductIndex - 1]?.id : null
  // get the next product id

  const nextProductId = currentProductIndex < products.length - 1 ? products[currentProductIndex + 1]?.id : null
  console.log(prevProductId, nextProductId);


  // print the template with the product's data
  return (
    <>

      <main>

        {
          !product ? ('Loading ...')
            : (
              <>
                <div style={{ minHeight: '50vh', backgroundImage: `url(${product.image})` }}></div>

                <section id="product_details" className="mt-5">
                  <div className="container">
                    <div className="row g-4">
                      <div className="col-12 col-md-5">
                        <img className="img-fluid" src={product.image} alt={product.title} />
                      </div>
                      <div className="col-12 col-md-7">

                        {/* 👇 Add a button to navigate to the previous page (this is using the browser history) */}
                        <button className="back" onClick={() => navigate(-1)}>
                          <i className="bi bi-arrow-left"></i>
                        </button>

                        <h1>Product: {product.title}</h1>
                        <p>{product.description}</p>
                        <div className="price fw-bold fs-2">${product.price}</div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="pagination d-flex justify-content-center gap-3 ">
                  {prevProductId && (<Link className="btn btn-dark" to={`/products/${prevProductId} `}>Prev</Link>)}

                  {nextProductId && (<Link className="btn btn-dark" to={`/products/${nextProductId}`}>Next</Link>)}
                </div>
              </>
            )
        }

      </main>

    </>
  )
}
