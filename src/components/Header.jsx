import React, { useEffect, useState } from 'react'
import "./Header.css";
import { Link } from 'react-router-dom'
import manu from "../images/manu1.png";
import searchImg from "../images/search.svg";
import close from "../images/close.svg";
import logo from "../images/logogrupo2.png";

const Header = () => {

  const [toggle, setToggle] = useState(true)
  const [show, setShow] = useState(true)
  const [search, setSearch] = useState("")

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(false)
    }
    else {
      setShow(true)
    }
  }



  return (
    <div className={`Header ${show && 'Header-show'}`}>

      {toggle ? <div className="Header-ul">
        <div className="Header-img">
          <img className={show && 'img-show'} src={logo} alt="" />
        </div>

        <div className="Header-list">
          <ul >
            <li className="btnlist">
              <Link to='/'>Inicio</Link>
            </li>
            <li className="btnlist">
              <Link to='/quienes-somos/'>Quienes Somos</Link>
            </li>
            <li className="btnlist">
              <Link to='/servicios/'>Servicios</Link>
            </li>
            <li className="btnlist">
              <Link to='/equipos'>Equipos</Link>
            </li>
            <li className="btnlist">
              <Link to='/contacto'>Contactanos</Link>
            </li>
            <li className="btnlist">
              <img className="search-icon" onClick={handleToggle} src={searchImg} alt="" />
            </li>
          </ul>
        </div>
      </div>
        :
        <div className="Header-search">
          <div className='navbar-show'>
            <input onChange={(e) => handleSearch(e)} type="text" name="" placeholder='START TYPING...' id="busqueda" value={search} />
            <img className="close" onClick={handleToggle} src={close} alt="" />
          </div>
        </div>}




    </div>
  )
}

export default Header