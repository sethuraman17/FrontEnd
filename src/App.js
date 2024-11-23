import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css"; // Add professional styles here
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Services from "./pages/Services.js";
import Infrastructure from "./pages/Infrastructure.js";
import Blog from "./pages/Blog.js";
import Certificate from "./pages/Certificate";
import ContactUs from "./pages/Contactus";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for a professional touch
import logo from "./logo.png"; // Import your logo here
import Internship from "./pages/Internship.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "80px", marginRight: "10px" }}
                />{" "}
                {/* Adjust size and margin as needed */}
              <span>SRIRAM COATERS</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="infrastructureDropdown"
                      role="button"
                      data-bs-toggle="dropdown" // Updated for Bootstrap 5
                      aria-expanded="false"
                    >
                      Infrastructure
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="infrastructureDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/internship">
                          Internship
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/blog">
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/certificate">
                      Certificate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="main-content container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/Services" component={Services} />
            <Route path="/Infrastructure" component={Infrastructure} />
            <Route path="/certificate" component={Certificate} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/internship" component={Internship} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </main>

        <footer className="App-footer bg-dark text-white mt-5">
          <div className="container">
            <div className="row py-4">
              {/* Left Section: Navigation Links */}
              <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-white" to="/Home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/Services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="infrastructureDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Infrastructure
                    </Link>
                    <ul
                      className="dropdown-menu dropdown-custom"
                      aria-labelledby="infrastructureDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/internship">
                          Internship
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/blog">
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link className="text-white" to="/certificate">
                      Certificate
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Center Section: Contact Form */}
              <div className="col-md-4">
                <h5>Contact Us</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="+1 234 567 8901"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Enter your message here..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right Section: Map */}
              <div className="col-md-4">
                <h5>Our Location</h5>
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.96305791531658!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f7f3aa98dd7!2sVictoria%20State%20Library!5e0!3m2!1sen!2sus!4v1649901941448!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
