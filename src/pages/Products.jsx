import ProductsSection from "../components/products/ProductsSection";

export default function Products() {

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

        <ProductsSection />

      </main>


    </>
  )
}