import { useEffect, useState } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Routes, NavLink, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Form from './Pages/Form/Form';

function App() {

  return (
    <section data-bs-version="5.1" className="header1 cid-tJS9vXDdRK" id="header01-7">
      <div className="container">
        <Router>
          <div>
            <NavLink activeClassName="active" to={`/`}><span>Home</span></NavLink>
            <NavLink activeClassName="active" to={`/form`}><span>Form</span></NavLink>

            {/* <nav>
                <a href="/">Home</a> | <a href="/form">Form</a>
              </nav> */}

            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/form" element={<Form />} />
            </Routes>
          </div>
        </Router>
      </div>
    </section>
  )
}

export default App