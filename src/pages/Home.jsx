import { useProductsContext } from "../contexts/productContext";
import ProductsGrid from "../components/products/ProductsGrid";

export default function Home() {

  const { products } = useProductsContext()
  console.log(products);


  return (
    <>
      <main>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-1 fw-bold">Something Cool 😎</h1>
            <p className="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your liking.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>

        <section className="mb-3">
          <div className="container">
            <h3>Best Sellers</h3>
            <ProductsGrid products={products.slice(0, 3)} />
          </div>

        </section>


        <section>
          <div className="container">
            <h3>Lastest articles</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
              <div className="col">
                <div className="card">
                  <img className="card-img-top" src="https://picsum.photos/400/300" alt="" />
                  <div className="card-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati sit unde optio aliquam non provident ipsam! Quam, eos itaque aliquid delectus nulla inventore beatae accusantium voluptatum doloremque veritatis soluta vitae.
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className="card-img-top" src="https://picsum.photos/400/300" alt="" />
                  <div className="card-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati sit unde optio aliquam non provident ipsam! Quam, eos itaque aliquid delectus nulla inventore beatae accusantium voluptatum doloremque veritatis soluta vitae.
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className="card-img-top" src="https://picsum.photos/400/300" alt="" />
                  <div className="card-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati sit unde optio aliquam non provident ipsam! Quam, eos itaque aliquid delectus nulla inventore beatae accusantium voluptatum doloremque veritatis soluta vitae.
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className="card-img-top" src="https://picsum.photos/400/300" alt="" />
                  <div className="card-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati sit unde optio aliquam non provident ipsam! Quam, eos itaque aliquid delectus nulla inventore beatae accusantium voluptatum doloremque veritatis soluta vitae.
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className="card-img-top" src="https://picsum.photos/400/300" alt="" />
                  <div className="card-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati sit unde optio aliquam non provident ipsam! Quam, eos itaque aliquid delectus nulla inventore beatae accusantium voluptatum doloremque veritatis soluta vitae.
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className="card-img-top" src="https://picsum.photos/400/300" alt="" />
                  <div className="card-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati sit unde optio aliquam non provident ipsam! Quam, eos itaque aliquid delectus nulla inventore beatae accusantium voluptatum doloremque veritatis soluta vitae.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>


    </>
  )
}