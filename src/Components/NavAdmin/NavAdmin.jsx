import React from "react";
import Navbar2 from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./NavAdmin.scss";
import useUser from "../../Hooks/useUser";
import { useNavigate, Link } from "react-router-dom";

export const NavAdmin = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <Navbar2 className="mb-2" sticky="top" id="Navbar-container">
      <Container className="d-flex justify-content-around">
        <Navbar2.Brand className="me-0" id="navbar-cotoApp-name" href="/">
          <img
            src={require("../../images/Logotipo CotoApp color.png")}
            alt="logo"
            width="50px"
          ></img>
        </Navbar2.Brand>
        <div id="coto-name">
          <Link id="link_nav" to="/dashboard/admin/residentes">
            Residentes
          </Link>
        </div>
        <div id="coto-name">
          <div class="dropdown">
            <a
              class=" dropdown-toggle"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pagos
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <a class="dropdown-item" type="button">
                  Configurar
                </a>
              </li>
              <li>
                <Link
                  class="dropdown-item"
                  type="button"
                  to="/dashboard/admin/pagos"
                >
                  Control
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="coto-name">
          <Link id="link_nav" to="/dashboard/admin/controlGastos">
            Gastos
          </Link>
        </div>
        <div id="coto-name">
          <a id="link_nav" href="/dashboard/admin/reportes">
            Reportes
          </a>
        </div>
        <form onSubmit={handleSubmit} id="deleteForm">
          <button className="btn btn-outline-light" type="submit">
            Salir
          </button>
        </form>
      </Container>
    </Navbar2>
  );
};
