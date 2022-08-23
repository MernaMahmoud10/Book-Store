import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { BooksContext } from '../../BooksContext';
import style from './Details.module.css'


export default function Details() {
  let params = useParams();
  const [BookDetails, setBookDetails] = useState(null);
  const [ImgSrc, setImgSrc] = useState("");
  const [countProd, setcountProd] = useState(1);
  const { Count, setCount } = useContext(BooksContext);

  async function getDetails(id) {
    let { data } = await axios.get(`https://gutendex.com/books/${id}`);
    console.log(data)
    setBookDetails(data)

  }
  function addToCart() {
    debugger;
    let ProdInp = Number(document.getElementById("ProdInp").value);
    setCount(Count + ProdInp)
  }
  useEffect(() => {

    getDetails(params.id)
  }, []);

  useEffect(() => {

    if (BookDetails == null)
      return;
    setImgSrc(BookDetails.formats["image/jpeg"])
  }, [BookDetails]);
  return (
    <>{BookDetails ?
      <>
        <div className='row my-5 justify-content-between'>
          <div className='col-md-4 d-flex align-items-center '>
            <img className="w-100" src={ImgSrc} alt='' />
          </div>
          <div className='col-md-7 d-flex align-items-center ps-4'>
            <div >



              <h1 className='text-darkBlue'>{BookDetails.title}</h1>
              <div className='row'>
                {BookDetails.bookshelves.map((bookshelve) => <div className='col-md-4  text-purple  py-4 rounded text-center d-flex align-items-center '> {bookshelve}</div>)}
              </div>
              <h4 className='text-darkGrey '>Download count :<span className='fw-light'> {BookDetails.download_count}</span></h4>
              <h4 className='mt-4 text-darkGrey'>languages : <span className='fw-light'>{BookDetails.languages}</span></h4>
              <h4 className='mt-4 text-darkGrey'>subjects :</h4>

              <div className='row'>
                {BookDetails.subjects.map((subject) => <div className='col-md-12 text-grey d-flex align-items-center'> {subject}</div>)}
              </div>
              <div className='row my-5'>
                <div className='col-md-3'>
                  <input id="ProdInp" className='form-control bg-lightGrey' type="number"
                    defaultValue={countProd} />
                </div>
                <div className='col-md-7'>
                  <button onClick={addToCart} className='w-100 py-1 rounded text-light bg-purple'>Add to cart</button>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className={` row flex-column justify-content-center align-items-center py-5`}>
          <div className={`${style.author} col-md-6 text-center position-relative py-3`}>
            <h4 className='text-darkGrey fw-bold pb-3'>About the Author :</h4>
            <h6 className='mb-3'>Author Name : <span className='text-grey'>{BookDetails.authors[0].name}</span></h6>
            <h6 className='mb-3'>Birth year : <span className='text-grey'>{BookDetails.authors[0].birth_year}</span></h6>
            <h6 className='mb-3'>Death year : <span className='text-grey'>{BookDetails.authors[0].death_year}</span></h6>


          </div>
        </div>
      </> : <div className='d-flex justify-content-center align-items-center vh-100'><i className='fa-2xl fas fa-spinner fa-spin'></i></div>}
    </>
  )
}
