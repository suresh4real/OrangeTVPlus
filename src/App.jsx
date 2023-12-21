import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Search from './components/Search';
import Addmovie from './components/Addmovie';
import Description from './components/Description';
import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './components/Update';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Sidebar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/add' element={<Addmovie />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/description/:id' element={<Description />}/>
            <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
