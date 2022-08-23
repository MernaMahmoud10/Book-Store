import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let BooksContext = createContext([]);
export function BooksContextProvider(props) {
    const [BestSellerBooks, setBestSellerBooks] = useState([]);
    const [PopularBooks, setPopularBooks] = useState([]);
    const[TotalBooks,setTotalBooks]=useState([])
    const [Next, setNext] = useState(null);
    const [Pre, setPre] = useState(null);
    const [Count, setCount] = useState(0);



    async function getBooks(parameter,callBack) {
        let { data } = await axios.get(`https://gutendex.com/books/${parameter}`)
        callBack(data.results);
        setNext(data.next)
        setPre(data.pre)

    }

    useEffect(() => {
        getBooks("",setBestSellerBooks)
        getBooks("?sort=ascending",setTotalBooks)

    }, []);

    useEffect(() => {
        if (BestSellerBooks.length === 0)
            return;
        setPopularBooks(BestSellerBooks.slice(0, 6));
        console.log(BestSellerBooks)
    }, [BestSellerBooks])


    return <BooksContext.Provider value={{ BestSellerBooks, PopularBooks , Next ,Count ,setCount ,TotalBooks}}>
        {props.children}
    </BooksContext.Provider>
}