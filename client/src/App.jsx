import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cards from './components/Cards'
import './App.css'

function App() {


  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/cards" element={<Cards/>}/>
      </Routes>
    </div>
  )
}

export default App
