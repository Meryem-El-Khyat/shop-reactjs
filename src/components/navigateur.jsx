import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

const Navigateur = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Le Talon  <br />Séduisant</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">A propos</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop">Shop</Link>
                        </li>
                        
                    </ul>
                    <form className="d-flex" role="search">
                        
                    <button type="button" class="btn btn-outline-dark"> <i class="bi bi-cart-fill"></i>Chariot</button>  
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navigateur;
