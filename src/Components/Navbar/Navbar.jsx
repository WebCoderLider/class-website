import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light position-fixed bg-light w-100 px-5 shadow-sm rounded">
                <a className="navbar-brand fw-bold fs-5" href="#">11-A</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link fw-bold fs-6" href="#">Umumiy rasmlar</a>
                        <a className="nav-item nav-link fw-bold fs-6" href="#">O'qituvchilar</a>
                        <a className="nav-item nav-link fw-bold fs-6" href="#">Guruhimiz</a>
                        <a className="nav-item nav-link fw-bold fs-6" href="#">Yangiliklar</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
