import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Cards from './components/Cards/Cards'
import ProductCreate from './components/ProductCreate/ProductCreate'
import Detail from './components/Details/Details.jsx'
import Products from './components/Products/Products'
import PanelAdmin from './components/PanelAdmin/PanelAdmin'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Payment from './components/Payment/Payment.jsx'
import User from './components/User/User'
import Profile from './components/Profile/Profile'

import { FillUser } from './action'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Wishlist from './components/Wishlist/Wishlist.jsx';

import './App.css'


function App(){

  const dispatch = useDispatch();

  useEffect(() => {
    if(window.localStorage.getItem("cookie")){
      dispatch(FillUser())
    }

    localStorage.setItem("Mathias", 300);

    {
      console.log(localStorage.getItem("Mathias"))
    }
  },[])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cards" element={<Cards/>}/>
        <Route exact path="/createProducts" element={<ProductCreate/>}/>
        <Route exact path='cards/:id' element={<Detail/>}/>
        <Route exact path='/:id' element={<Products/>} />
        <Route exact path='/paneladmin' element={<PanelAdmin/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/payment' element={<Payment />} />
        <Route exact path='/user' element={<User/>} />
        <Route exact path='/wishlist' element={<Wishlist />} />
      </Routes>
    </div>
  )
}

export default App
