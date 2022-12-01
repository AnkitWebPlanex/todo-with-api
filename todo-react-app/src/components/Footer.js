import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container-fluid bg-light fixed-bottom">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 mb-0">
                <div className="col-md-4 d-flex align-items-center">
                    <NavLink to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
                    </NavLink>
                    <span className="text-muted">© 2022 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href="#">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="#">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="#">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer