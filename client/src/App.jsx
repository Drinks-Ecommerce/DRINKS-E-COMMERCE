import { 
  Route,
  Routes,
} from 'react-router-dom'
import Home from './components/Home/Home'
import Cards from './components/Cards/Cards'
import ProductCreate from './components/ProductCreate/ProductCreate'
import Detail from './components/Details/Details.jsx'
import Products from './components/Products/Products'
import PanelAdmin from './components/PanelAdmin/PanelAdmin'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
 import User from './components/User/User'
 import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
 
 import Payment from './components/Payment/Payment.jsx'

import './App.css'



function App(){

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/cards'
        element={
          <PrivateRoute>
            <Cards/>
          </PrivateRoute>
        }/>
        <Route exact path="/createProducts" element={<ProductCreate/>}/>
        <Route exact path='cards/:id' element={<Detail/>}/>
        <Route exact path='/:id' element={<Products/>} />
        <Route 
        exact path='/paneladmin'
        element={
          <PrivateRoute>
            <PanelAdmin/>
          </PrivateRoute>
        }
        />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/payment' element={<Payment />} />
        <Route exact path='/user' element={<User/>} />
      </Routes>
    </div>
  )
}

export default App
