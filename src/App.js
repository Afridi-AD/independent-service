
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


const auth = getAuth(app);

function App() {
  return (
    <div>
    
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element ={<Login></Login>}></Route>
      <Route path='/services'></Route>
      <Route path='/cheakout' element={<Cheakout></Cheakout>}></Route>
    </Routes>
    <Footer></Footer>

    </div>
  );
}

export default App;
