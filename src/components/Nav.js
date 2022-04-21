import React from 'react'
import { Link } from 'react-router-dom'



export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="\">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="\navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link active" aria-current="page" to="/racers">Racers</Link>
                <Link className="nav-link active" aria-current="page" to="/kekambas">Class List</Link>
                <Link className="nav-link active" aria-current="page" to="/posts">Posts</Link>
            </div>
            </div>
        </div>
    </nav>
  )
}
