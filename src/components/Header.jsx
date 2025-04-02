import { NavLink } from 'react-router-dom'
import viteLogo from '/vite.svg'
export default function Header() {

  const menu = [
    {
      id: 1,
      path: '/',
      text: 'Home'
    },
    {
      id: 2,
      path: '/products',
      text: 'Products'
    },
    {
      id: 3,
      path: '/contacts',
      text: 'Contacts'
    }
  ]

  return (

    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={viteLogo} alt="" />
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">

                {menu.map(item => (
                  <li className="nav-item" key={item.id}>
                    <NavLink className='nav-link' to={item.path}>{item.text}</NavLink>

                  </li>
                ))}

              </ul>

            </div>
          </div>
        </nav>
      </header>
    </>
  )
}