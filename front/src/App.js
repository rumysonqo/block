import logo from './logo.svg';
import './App.css';

//importar componentes
import CompShowBlogs from './blog/ShowBlog';
import CompCreateBlog from './blog/CreateBlog';  
import CompEditBlog from './blog/EditBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowBlogs />} />
          <Route path='/create' element={ <CompCreateBlog />} />
          <Route path='/edit/:id' element={ <CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
