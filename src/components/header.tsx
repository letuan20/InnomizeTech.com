import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <section id="header">
      <header className="fixed-top">
        <div className="container">
          <div className="logo float-left">
            <Link to="/" activeClassName="active">
              <img
                src="img/logo.png"
                alt="Innomize logo"
                className="img-fluid"
              />
            </Link>
          </div>

          <nav className="main-nav float-right d-none d-lg-block">
            <ul>
              <li>
                <Link to="/" activeClassName="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" activeClassName="active">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" activeClassName="active">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/career" activeClassName="active">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Header;
