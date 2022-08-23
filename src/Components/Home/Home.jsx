import React, { useContext, useState } from 'react';
import { BooksContext } from '../../BooksContext';
import book2 from '../../images/book 7.jpg';
import style from "./Home.module.css";
import { useNavigate, Link } from "react-router-dom";
import book9 from "../../images/book 9.jpg"

export default function Home() {

  const { TotalBooks, PopularBooks } = useContext(BooksContext);
  let navigate = useNavigate();
  const [categories, setcategories] = useState(['children', 'science', 'travelling', 'romantic', 'horror', 'cooking']);

  function goToCategory(e) {
    debugger;
    e.preventDefault();
    navigate({
      pathname: "/category",
      search: `?topic=${e.target.id}`
    })
  }

  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <div className="w-100 position-relative mb-5">
            <img className=" w-100" src={book2} alt="First slide" />
            <div className=' w-100 position-absolute top-0 left-0 right-0 bottom-0 overflow-auto divphoto py-4 text-center'>
              <div className='d-flex flex-column justify-content-between w-100 align-items-center h-100'>
                <div>
                  <h1 className='text-darkBlue fw-bolder py-2'>Build Your Library</h1>
                  <h5 className='text-muted fw-bold '>Buy two selected books and get one for free</h5>
                </div>
                <button onClick={() => navigate("/store")} className='w-25 bg-darkBlue text-light fw-bold py-2 px-4 mt-5 rounded fs-5'>View all</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex w-100 justify-content-md-between align-items-center mb-3'>
        <h2 className='text-darkGrey fw-bold '>Popular Now</h2>
        <span onClick={() => navigate("/bestSeller")} className=' text-grey fs-5 cursore-pointer'>View All</span>
      </div>
      <div className='row pb-3'>
        {PopularBooks.map((book) =>
          <>
            <div className='col-md-2'>

              <Link to={`/details/${book.id}`} >
                <img className={`w-100 ${style.BookImg} mb-3 rounded`} src={book.formats["image/jpeg"]} alt="kkk" />
                <div className={`d-flex flex-column ${style.bookDesc}`}>
                  <h5 className='text-darkGrey'>{book.title}</h5>
                  <h6 className='text-grey '>{book.authors[0].name}</h6>
                </div></Link>
            </div>


          </>)}
      </div>
      <div className='d-flex w-100 justify-content-md-between align-items-center mb-3 mt-5'>
        <h2 className='text-darkGrey fw-bold '>Categories</h2>
        <span onClick={() => navigate("/bestSeller")} className=' text-grey fs-5 cursore-pointer'>View All</span>
      </div>
      <div className='row'>
        {categories.map((category, index) =>
          <>

            <div key={index} className={`${style.CatDiv} col-md-2 d-flex position-relative align-items-center`}>

              <Link to={`/category/${category}`} >
                <img className={`w-100 ${style.BookImg}  rounded`} src={book9} alt="categories" />
                <div className={`${style.BtnDiv} position-absolute `}>


                  <button id={category} className='btn btn-danger' onClick={goToCategory}>shop here</button>
                </div>

                <div className={`  ${style.categoryDes} position-absolute bottom-0 text-center`}>
                  <h5 className='text-darkGrey'>{category}</h5>
                </div>
              </Link>
            </div>


          </>)}
      </div>

    </>
  )
}