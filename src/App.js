import './App.css';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import { Route, Routes } from 'react-router-dom';
import Notfound from './Components/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import { BooksContextProvider } from './BooksContext';
import Store from './Components/Store/Store';
import BestSeller from './Components/BestSeller/BestSeller';
import Search from './Components/Search/Search';
import Category from './Components/Category/Category';


function App() {
  return (

    <div className="App bg-lilac  py-5 px-5">

      <div className='bg-light  rounded-5 my-5 mx-5 p-5'>
        <div className='container'>
          <BooksContextProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/store' element={<Store />} />
              <Route path='/search' element={<Search />} />
              <Route path='/category' element={<Category />} />
              <Route path='/bestseller' element={<BestSeller />} />
              <Route path='/details' element={<Details />} >
                <Route path=":id" element={<Details />} />
              </Route>
              <Route path='*' element={<Notfound />} />
            </Routes>
          </BooksContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
