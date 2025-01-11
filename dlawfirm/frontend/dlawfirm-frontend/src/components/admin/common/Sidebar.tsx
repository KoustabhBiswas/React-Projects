import React from 'react'
import { Link } from 'react-router-dom'
export const Sidebar = () => {
    return (
        <>
            <div className="sidebar" data-background-color="dark">
                <div className="sidebar-logo">
                    {/* Logo Header data-background-color="dark"*/}
                    <div className="logo-header" >
                        {/* <a href="index.html" className="logo"> */}
                            <img
                                src="public/template/img/kaiadmin/logo_light.svg"
                                alt="navbar brand"
                                className="navbar-brand"
                                height={20}
                            />
                            {/* <b>Admin</b> */}
                        {/* </a> */}
                        <div className="nav-toggle">
                            <button className="btn btn-toggle toggle-sidebar">
                                <i className="gg-menu-right" />
                            </button>
                            <button className="btn btn-toggle sidenav-toggler">
                                <i className="gg-menu-left" />
                            </button>
                        </div>
                        <button className="topbar-toggler more">
                            <i className="gg-more-vertical-alt" />
                        </button>
                    </div>
                    {/* End Logo Header */}
                </div>
                <div className="sidebar-wrapper scrollbar scrollbar-inner">
                    <div className="sidebar-content">
                        <ul className="nav nav-secondary">


                            <li className="nav-item">


                                <Link to="/cases"  >
                                    <i className="fas fa-layer-group" />
                                    <p >Case List</p>
                                     
                                </Link>
                                <Link to="/cases/addnewcase"  >
                                    <i className="fas fa-layer-group" />
                                    <p >Add New Case</p>
                                     
                                </Link>
                                
                            </li>
                            {/* <li className="nav-item">
                                <a data-bs-toggle="collapse" href="#sidebarLayouts">
                                    <i className="fas fa-th-list" />
                                    <p>Sidebar Layouts</p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="sidebarLayouts">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <a href="sidebar-style-2.html">
                                                <span className="sub-item">Sidebar Style 2</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="icon-menu.html">
                                                <span className="sub-item">Icon Menu</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a data-bs-toggle="collapse" href="#forms">
                                    <i className="fas fa-pen-square" />
                                    <p>Forms</p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="forms">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <a href="forms/forms.html">
                                                <span className="sub-item">Basic Form</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a data-bs-toggle="collapse" href="#tables">
                                    <i className="fas fa-table" />
                                    <p>Tables</p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="tables">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <a href="tables/tables.html">
                                                <span className="sub-item">Basic Table</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tables/datatables.html">
                                                <span className="sub-item">Datatables</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a data-bs-toggle="collapse" href="#maps">
                                    <i className="fas fa-map-marker-alt" />
                                    <p>Maps</p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="maps">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <a href="maps/googlemaps.html">
                                                <span className="sub-item">Google Maps</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="maps/jsvectormap.html">
                                                <span className="sub-item">Jsvectormap</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a data-bs-toggle="collapse" href="#charts">
                                    <i className="far fa-chart-bar" />
                                    <p>Charts</p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="charts">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <a href="charts/charts.html">
                                                <span className="sub-item">Chart Js</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="charts/sparkline.html">
                                                <span className="sub-item">Sparkline</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="widgets.html">
                                    <i className="fas fa-desktop" />
                                    <p>Widgets</p>
                                    <span className="badge badge-success">4</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="../../documentation/index.html">
                                    <i className="fas fa-file" />
                                    <p>Documentation</p>
                                    <span className="badge badge-secondary">1</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a data-bs-toggle="collapse" href="#submenu">
                                    <i className="fas fa-bars" />
                                    <p>Menu Levels</p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="submenu">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <a data-bs-toggle="collapse" href="#subnav1">
                                                <span className="sub-item">Level 1</span>
                                                <span className="caret" />
                                            </a>
                                            <div className="collapse" id="subnav1">
                                                <ul className="nav nav-collapse subnav">
                                                    <li>
                                                        <a href="#">
                                                            <span className="sub-item">Level 2</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="sub-item">Level 2</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="collapse" href="#subnav2">
                                                <span className="sub-item">Level 1</span>
                                                <span className="caret" />
                                            </a>
                                            <div className="collapse" id="subnav2">
                                                <ul className="nav nav-collapse subnav">
                                                    <li>
                                                        <a href="#">
                                                            <span className="sub-item">Level 2</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="sub-item">Level 1</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
            {/* End Sidebar */}
        </>
    )
}
