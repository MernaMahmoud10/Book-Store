import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { BooksContext } from '../../BooksContext';


export default function Navbar() {
  const { Count } = useContext(BooksContext);
  const [SearchVal,setSearchVal]=useState(null);
  let navigate=useNavigate()

function search(e)
{
  debugger;
  e.preventDefault();
  setSearchVal(document.getElementById("searchInp").value)
  navigate({
    pathname:"/search",
    search:`?search=${document.getElementById("searchInp").value}`
  })
}

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent pt-5">
        <div className="container flex-column ">
          <div className='d-md-flex = text-center  justify-content-md-between w-100 '>
            <Link className="navbar-brand fw-bolder fs-4 text-darkGrey" to="">Booksy</Link>

            <form className=" w-50 m-auto position-relative" onSubmit={search}>
              <input id="searchInp" className="form-control px-4 bg-lightGrey fw-bold " type="search"
                placeholder="Search  by author, title, name"
                aria-label="Search"
                defaultValue={SearchVal} /><i className="fa-solid fa-magnifying-glass text-darkBlue"></i>
            </form>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="d-flex align-items-center">
                <i className="fa-regular fa-heart me-4 fs-5"></i>
                <span className=' counterSpan border rounded-circle bg-purple text-light me-4'>{Count}</span>
                <span className='text-darkBlue fs-5'>EN</span>
              </li>
            </ul>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto  my-4">
              <li className="nav-item">
                <NavLink to="/home"
                  activeclassname="nav-link position-relative text-grey fw-bold active"
                  className="nav-link position-relative text-grey fw-bold"
                >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/bestseller"
                  activeclassname="nav-link position-relative text-grey fw-bold active"
                  className="nav-link position-relative text-grey fw-bold"
                >Best seller</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category"
                  activeclassname="nav-link position-relative text-grey fw-bold active"
                  className="nav-link position-relative text-grey fw-bold"
                >Category</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/store"
                  activeclassname="nav-link position-relative text-grey fw-bold active"
                  className="nav-link position-relative text-grey fw-bold"
                >Store</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
