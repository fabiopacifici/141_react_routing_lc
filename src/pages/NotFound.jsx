import { Link } from "react-router-dom"

export default function NotFound() {

  return (
    <>
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">404 Not found</h1>
          <p class="col-md-8 fs-4">
            😱Ops! The page was not found!
          </p>
          <Link class="btn btn-primary btn-lg" type="button" to={'/'}>
            Visti our home page
          </Link>
        </div>
      </div>

    </>
  )
}