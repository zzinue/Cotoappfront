import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../Hooks/useHttp";
import { actualizarRRequest } from "./Services/ActualizarResidenteService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

import "./ResidenteActualizar.scss";

import useUser from "../../Hooks/useUser";

export const ResidenteActualizar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const urlApi = process.env.REACT_APP_URL_API;
  const { id } = queryString.parse(location.search);
  console.log(queryString.parse(location.search))

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    handleReset,
    setFieldValue,
  } = useFormik({
    initialValues: {
      nombre: "",
      numCasa: "",
      email: "",
      telefono: "",
    },

    onSubmit: () => request(),
    onReset: () => {
      const source = document.getElementById("source");
      source.innerText = "";
    },
  });

  const { loading, request, error, data } = useHttp(actualizarRRequest, {
    nombre: values.nombre,
    numCasa: values.numCasa,
    email: values.email,
    telefono: values.telefono,
    id: id,
  });

  useEffect(() => {
    if (data.success) {
      navigate(".");
      const source = document.getElementById("source");
      source.innerText = "Residente actualizado exitosamente";
    } else if (data.success == false) {
      navigate(".");
      const source = document.getElementById("source");
      source.innerText = "Residente no se pudo actualizar";
    } else {
      const source = document.getElementById("source");
      source.innerText = "";
    }
  }, [data]);

  useEffect(() => {
    async function fetchData() {
      // You can await here

      const result = await axios.get(`${urlApi}/residentes/${id}`);
      const { nombre, email, casa, telefono } = result.data.payload;
      setFieldValue("nombre", nombre);
      setFieldValue("email", email);
      setFieldValue("numCasa", casa);
      setFieldValue("telefono", telefono);
    }
    fetchData();
  }, []);

  return (
    <div className="ResidenteCMain">
      <div className="ResidenteCContainer">
        <div className="ResidenteCContent">
          <form
            onSubmit={handleSubmit}
            onReset={handleReset}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <span>Nombre: </span>
                  </td>
                  <td>
                    {" "}
                    <input
                      type="nombre"
                      value={values.nombre}
                      onChange={handleChange}
                      name="nombre"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>No. Casa: </span>
                  </td>
                  <td>
                    <input
                      type="numCasa"
                      value={values.numCasa}
                      onChange={handleChange}
                      name="numCasa"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Email: </span>
                  </td>
                  <td>
                    <input
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      name="email"
                    ></input>
                    {errors.email && <span> Ingresa un email valido</span>}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Telefono: </span>
                  </td>
                  <td>
                    <input
                      type="telefono"
                      value={values.telefono}
                      onChange={handleChange}
                      name="telefono"
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="botones_f">
              <button id="button_limpiar" type="reset">
                Limpiar
              </button>

              <button id="button_enviar" type="submit">
                Actualizar
              </button>
            </div>
            <div id="source"></div>
          </form>
        </div>
      </div>
    </div>
  );
};
