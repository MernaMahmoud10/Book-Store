import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BooksContext } from '../../BooksContext';
import style from "./BestSeller.module.css";



export default function BestSeller() {
  const { BestSellerBooks } = useContext(BooksContext);

  return (
    <>

      {BestSellerBooks.length!==0 ? <div className="row ">{BestSellerBooks.map((book) =>
        <>

          <div className={`col-md-3 mb-5 pe-4 ${style.BookDiv}`}>

            <Link to={`/details/${book.id}`}  >
              <img className={`w-100 ${style.BookImg} mb-3 rounded`} src={book.formats["image/jpeg"]} alt="kkk" />
              <div className={`d-flex flex-column ${style.bookDesc}`}>
                <h5 className='text-darkGrey'>{book.title}</h5>
                {book.authors.map((author)=><h6 className='text-grey '>{author.name}</h6>)}

              </div></Link>
          </div>




        </>)}</div> : <div className='d-flex justify-content-center align-items-center vh-100'><i className='fa-2xl fas fa-spinner fa-spin'></i></div>}
      {/* <div className='d-flex w-100 justify-content-md-between align-items-center mb-3'>
        <button className='btn bg-darkBlue text-light py-2 px-3'>previous</button>
        <button onClick={goToPage} className='btn bg-darkBlue text-light py-2 px-3'>Next</button>
      </div> */}



    </>
  )
}
