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
import Users from './components/User/User'
import Profile from './components/Profile/Profile'
import ProductsAdmin from './components/ProductsAdmin/ProductsAdmin'
import ProductsEdit from './components/ProductsEdit/ProductsEdit'
import UsersBan from './components/User/userBan'

import { FillUser } from './action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Wishlist from './components/Wishlist/Wishlist.jsx';
import User from './components/User/User'
import './App.css'


function App(){
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(window.localStorage.getItem("cookie")){
      dispatch(FillUser())
    }
  },[dispatch])
  console.log("ROLES",user.roles) 
  
  console.log("USER",user)
  
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
        <Route exact path='/user' element={<Users/>} />
        <Route exact path='/wishlist' element={<Wishlist />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path="/productsadmin" element={<ProductsAdmin/>} /> 
        <Route exact path="/products/edit/:id" element={<ProductsEdit/>} />
        <Route exact path="/users/id/:id" element={<UsersBan/>} />
      </Routes>  
    </div>
  )
}

export default App
