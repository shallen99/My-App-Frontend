import React from 'react'

function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container pt-6">
      <a className="navbar-brand" href="#">Musique</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Outlook</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/postartist">Post Artist</a>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar