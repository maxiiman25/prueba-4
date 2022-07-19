import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="#" className="brand-link">---
            </a>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">---
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link to="/sales" className="nav-link">
                                <i className="nav-icon fas fa-crat-shopping"/>
                                <p>Ventas</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sales" className="nav-link">
                                <i className="nav-icon fas fa-user"/>
                                <p>Clientes</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">
                                <i className="nav-icon fas fa-box"/>
                                <p>Productos</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sales" className="nav-link">
                                <i className="nav-icon fas fa-user"/>
                                <p>Usuarios</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
export default Sidebar;