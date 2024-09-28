import React from 'react';
import './Navbar.css'; // Ensure correct path

const Navbar = () => {
    return (
        <>
            {/* Top bar */}
            <div className="navbar-top p-2 text-end">
                <div className="container">
                    <div className="d-inline top-links">
                        <a href="#">Get App</a>
                        <a href="#">Store & Events</a>
                        <a href="#">Gift Card</a>
                        <a href="#">Help</a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#">NYKAA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Brands</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Luxe</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nykaa Fashion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Beauty Advice</a>
                            </li>
                        </ul>
                        <form className="d-flex me-3">
                            <input className="form-control me-2" type="search" placeholder="Search on Nykaa" aria-label="Search" />
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link btn btn-outline-primary" href="#">Sign In</a>
                            </li>
                            <li className="nav-item ms-2">
                                <a className="nav-link" href="#"><i className="bi bi-cart"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Second Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div className="container">
                    <div className="collapse navbar-collapse" id="secondaryNavbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Makeup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Skin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hair</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Appliances</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Bath & Body</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Natural</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Mom & Baby</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Health & Wellness</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Fragrance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Lingerie & Accessories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link sale-badge" href="#">SALE</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
