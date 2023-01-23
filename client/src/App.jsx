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
import User from './components/User/User'
import { AuthContextProvider } from './components/AuthContext/AuthContext.jsx'
import Payment from './components/Payment/Payment.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import PublicRoute from './components/PublicRoute/PublicRoute'
import './App.css'





function App(){
  const User = useSelector((state) => state.User)
  const dispatch = useDispatch();
  
  useEffect(() => {
  
    if(window.localStorage.getItem("cookie")){
      dispatch(FillUser())
    }
  },[])
  

  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<PublicRoute />}>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path='/cards' element={<Cards/>}/>
              <Route exact path='cards/:id' element={<Detail/>}/>
              <Route exact path='/:id' element={<Products/>} />
              <Route exact path='/login' element={<Login/>} />
              <Route exact path='/register' element={<Register/>} />
              <Route exact path='/wishlist' element={<Wishlist />} />
              <Route exact path='/profile' element={<Profile />} />
          </Route>
          <Route path='/private' element={<PrivateRoute />}>
              <Route exact path="/private/createProducts" element={<ProductCreate/>}/>
              <Route exact path='/private/paneladmin' element={<PanelAdmin/>}/>
              <Route exact path='/private/payment' element={<Payment />} />
              <Route exact path='/private/user' element={<User/>} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
