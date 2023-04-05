import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Welcome to the Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Todo List</Link>
                        <Link className="nav-link" to="/pokestats">Pokemon Stats</Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}