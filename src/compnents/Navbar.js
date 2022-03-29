import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { BsCart4 } from 'react-icons/bs';


import { Button, Form, FormControl, NavLink } from 'react-bootstrap'

function Navbar() {
    return (

        <div className='nav_container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white " >
                <div className="container-fluid">
                    <NavLink to='/'>
                        <img src="/assests/Logo.png" alt='logo' width='200px' height='40px' />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">

                            {/* <li className="nav-item fw-bold">
                <NavLink className="nav-link" to="/home">HOME</NavLink>
              </li> */}
                            <li className="nav-item fw-bold">
                                <NavLink className="nav-link" to="/products">Category1 <span class="sr-only"></span></NavLink>
                            </li>
                            <li className="nav-item fw-bold">
                                <NavLink className="nav-link" to="/women">Category2</NavLink>
                            </li>
                            <li className="nav-item fw-bold">
                                <NavLink className="nav-link" to="/kids">Category3</NavLink>
                            </li>
                        </ul>

                        <div className=' text-align-right'> </div>
                        <div className='d-flex '>

                            <div className='d-flex'>
                                <input type="text" name="" value=""className='search'/>
                                <button class="icon"><AiOutlineSearch className='search'/></button>
                            </div>
                        </div>
                        <div className="navbar_icons me-3">
                
                            <VscAccount className='ms-3'/><span >My account</span>
                            < BsCart4 className='ms-3'/><span >My cart</span>
                        </div>


                    </div>


                </div>
            </nav>
        </div>



    )
}

export default Navbar