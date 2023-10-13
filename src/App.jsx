import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Inicio from './paginas/Inicio'
import Integrantes from './paginas/Integrantes'
import Servicios from './paginas/Servicios'
import Equipos from './paginas/Equipos'
import Contactanos from './paginas/Contactanos'

function App() {

  return (
    <BrowserRouter>
      <>
        <Header />
      </>

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/quienes-somos/' element={<Integrantes />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/equipos' element={<Equipos />} />
        <Route path='/contacto' element={<Contactanos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
