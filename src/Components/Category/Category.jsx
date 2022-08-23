import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import style from "./Category.module.css";

export default function Category() 
{
    let [SearchParams, setSearchParams] = useSearchParams();
    const [categoryRes, setcategoryRes] = useState([]);
    async function getcategoryRes() {
        let { data } = await axios.get(`https://gutendex.com/books/?topic=${SearchParams.get("category")}`);
        console.log(data)
        setcategoryRes(data.results)
    }

    useEffect(() => {

        getcategoryRes();
    }, []);

    useEffect(() => { getcategoryRes(); }, [SearchParams])


    return (
        <>
            {categoryRes.length !== 0 ? <div className="row ">{categoryRes.map((book) =>
                <>

                    <div className={`col-md-3 mb-5 pe-4 ${style.BookDiv}`}>

                        <Link to={`/details/${book.id}`}  >
                            <img className={`w-100 ${style.BookImg} mb-3 rounded`} src={book.formats["image/jpeg"]} alt="kkk" />
                            <div className={`d-flex flex-column ${style.bookDesc}`}>
                                <h5 className='text-darkGrey'>{book.title}</h5>
                                {book.authors.map((author) => <h6 className='text-grey '>{author.name}</h6>)}

                            </div></Link>
                    </div>




                </>)}</div> : <div className='d-flex justify-content-center align-items-center vh-100'><i className='fa-2xl fas fa-spinner fa-spin'></i></div>}


        </>)

}
