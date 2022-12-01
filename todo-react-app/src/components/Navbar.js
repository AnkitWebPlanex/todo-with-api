import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from '../Pages/Home'
import CreateBlog from '../Pages/CreateBlog'
import Users from '../Pages/Users'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/create" className="nav-link" activeclassname="active" href="#">Create Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/users" className="nav-link" activeclassname="active" href="#">Users</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/create' element={<CreateBlog />}></Route>
                <Route path='/users' element={<Users />}></Route>
            </Routes>
        </>
    )
}

export default Navbar
