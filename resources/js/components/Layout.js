import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../css/Layout/layout.css'




const Layout = (props) => {


    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">coTech</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#">Seek Help <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#">Give Help</a>
                        </li>
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button>
                    </form>
                </div>
            </nav>


            {props.children}

            <footer className='row bg-light' >
                <div className='col-md-3 text-center footer__items rounded pt-3'>
                    <ul className=' navbar-nav'>
                        <li className=' nav-item'>lorem</li>
                        <li className=' nav-item'>lorem</li>
                        <li className=' nav-item'>lorem</li>
                    </ul>
                </div>
                <div className='col-md-3 text-center footer__items rounded pt-3'>
                    <ul className=' navbar-nav'>
                        <li className=' nav-item'>lorem</li>
                        <li className=' nav-item'>lorem</li>
                        <li className=' nav-item'>lorem</li>
                    </ul>
                </div>
                <div className='col-md-3 text-center footer__items rounded pt-3'>
                    <ul className=' navbar-nav'>
                        <li className=' nav-item'>lorem</li>
                        <li className=' nav-item'>lorem</li>
                        <li className=' nav-item'>lorem</li>
                    </ul>
                </div>
                <div className='col-md-3 text-center footer__items rounded pt-3'>
                    <ul className=' navbar-nav'>
                        <li className=' nav-item'>lorem</li>
                        <li className=' nav-item'>lorem</li>
                        <li className=' nav-item'>lorem</li>
                    </ul>
                </div>
            </footer>

        </div>
    )

}

export default Layout;