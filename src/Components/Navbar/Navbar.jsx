import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light position-fixed bg-light w-100 px-5 shadow-sm" style={{ 'zIndex': '9999999' }}>
                <a className="navbar-brand fw-bold fs-5" href="#">11-A</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="general-photos" className="nav-item nav-link fw-bold fs-6" href="#">Umumiy rasmlar</Link>
                        <ScrollLink to="teachers" smooth={true} duration={500} className="nav-item nav-link fw-bold fs-6" href="#">O'qituvchilar</ScrollLink>
                        <Link to="/users" className="nav-item nav-link fw-bold fs-6" href="#">O'quvchilar</Link>
                        <Link to="news" className="nav-item nav-link fw-bold fs-6" href="#">Yangiliklar</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
