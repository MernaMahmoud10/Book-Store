import React from 'react';
import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { BooksContext } from '../../BooksContext';
import style from "./Store.module.css";



export default function Store() {
  const { TotalBooks } = useContext(BooksContext);

  return (
    <>

      {TotalBooks.length!==0 ?

        <div className="row ">{TotalBooks.map((book) =>


          <div className='col-md-3 mb-5 pe-4 '>

            <Link to={`/details/${book.id}`} >
              <img className={`w-100 ${style.BookImg} mb-3 rounded`} src={book.formats["image/jpeg"]} alt="kkk" />
              <div className={`d-flex flex-column ${style.bookDesc}`}>
                <h5 className='text-darkGrey'>{book.title}</h5>
                {book.authors.map((author)=><h6 className='text-grey '>{author.name}</h6>)}

              </div></Link>
          </div>




        )}
        </div>


        : <div className='d-flex justify-content-center align-items-center vh-100'>
          <i className='fa-2xl fas fa-spinner fa-spin'></i>
        </div>
      }



    </>
  )
}
