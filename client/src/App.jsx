import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Cards from './components/Cards/Cards'
import ProductCreate from './components/ProductCreate/ProductCreate'
import Detail from './components/Details/Details.jsx'
import Vinos from './components/Vinos'
import './App.css'

function App() {


  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/cards" element={<Cards/>}/>
      <Route exact path="/createProducts" element={<ProductCreate/>}/>
      <Route exact path='cards/:id' element={<Detail/>}/>
       <Route exact path='/vinos' element={<Vinos/>}/>
      {/* <Route exact path='/cerveza' element={<Cerveza/>}/>
      <Route exact path='/espumantes' element={<Espumantes/>}/>
      <Route exact path='/Rones' element={<Rones/>}/>
      <Route exact path='/whiskys' element={<Whiskys/>}/>
      <Route exact path='/gins' element={<Gins/>}/>
      <Route exact path='/Vermus' element={<Vermus/>}/>
      <Route exact path='/cristaleria' element={<Cristaleria/>}/> */} 
  
      </Routes>
    </div>
  )
}

export default App
