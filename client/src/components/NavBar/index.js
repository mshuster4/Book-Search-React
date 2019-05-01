import React from "react";
import { Link, NavLink } from "react-router-dom"
import { Container } from "../Grid"

function NavBar() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Container>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <Link className="navbar-brand" to="#">Reading Wishlist</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/search">
                            Search <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/saved">
                            Saved
                        </NavLink>
                    </li>
                    </ul>
                </div>
            </Container>
        </nav>
    </React.Fragment>
  );
}

export default NavBar;
