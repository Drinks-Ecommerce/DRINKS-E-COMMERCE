import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Cards from './components/Cards/Cards'
import ProductCreate from './components/ProductCreate/ProductCreate'
import Detail from './components/Details/Details.jsx'
import Products from './components/Products/Products'
import PanelAdmin from './components/PanelAdmin/PanelAdmin'
import './App.css'
import Register from './components/Register/Register'

function App() {


  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/cards" element={<Cards/>}/>
      <Route exact path="/createProducts" element={<ProductCreate/>}/>
      <Route exact path='cards/:id' element={<Detail/>}/>
      <Route exact path='/:id' element={<Products/>} />
      <Route exact path='/paneladmin' element={<PanelAdmin/>} />
      </Routes>
    </div>
  )
}

export default App
