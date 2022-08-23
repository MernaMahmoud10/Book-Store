import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import style from "./Search.module.css";

export default function Search() {
    let [SearchParams, setSearchParams] = useSearchParams()
    const [SearchRes, setSearchRes] = useState([]);
    async function getSearchRes() {
        let { data } = await axios.get(`https://gutendex.com/books/?search=${SearchParams.get("search")}`);
        console.log(data)
        setSearchRes(data.results)
    }

    useEffect(() => {

        getSearchRes();
      }, []);

    useEffect(()=>{getSearchRes();},[SearchParams])  


    return (
        <>
              {SearchRes.length!==0 ? <div className="row ">{SearchRes.map((book) =>
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


        </>
    )
}
