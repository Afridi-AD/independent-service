
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cheakout from './Components/Cheakout/Cheakout';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import app from './firebase.init';
import {getAuth} from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';


const auth = getAuth(app);

function App() {
  return (
    <div>
    
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element ={<Login></Login>}></Route>
      <Route path='/services'></Route>
      <Route path='/cheakout' element={<RequireAuth><Cheakout></Cheakout></RequireAuth>}></Route>
      <Route path='/about' element={<AboutMe></AboutMe>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>

    </Routes>
    

    </div>
  );
}

export default App;
