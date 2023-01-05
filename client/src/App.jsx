import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Cards from './components/Cards/Cards'
import ProductCreate from './components/ProductCreate/ProductCreate'
import './App.css'

function App() {


  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/cards" element={<Cards/>}/>
      <Route exact path="/createProducts" element={<ProductCreate/>}/>
  
      </Routes>
    </div>
  )
}

export default App
