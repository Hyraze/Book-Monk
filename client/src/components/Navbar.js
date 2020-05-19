import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavCategories from './NavCategories';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-3 pb-3">
                    <Link className="navbar-brand" to="/"><i className="fa fa-book text-warning "></i> <span style={{ color: 'orange' }}>Book Monk</span></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-3">
                            <li className="nav-item pr-2">
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search by title, author or ISBN " />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa fa-search" ></i></button>
                                </form>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart"><button className="btn btn-danger mr-sm-2 my-2 my-sm-0"><i className="fa fa-shopping-bag" ></i></button></Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/signup"><button className="btn btn-primary mr-sm-2 my-2 my-sm-0"><i className="fa fa-user-plus" ></i></button></Link>
                            </li>
                            {/* <li className="nav-item ">
                                <Link to="/"><button className="btn btn-primary mr-sm-2 my-2 my-sm-0"><i className="fa fa-arrow-circle-left" ></i></button></Link>
                            </li> */}
                        </ul>
                    </div>
                </nav>
                <NavCategories />
            </div>
        )
    }
}

export default Navbar