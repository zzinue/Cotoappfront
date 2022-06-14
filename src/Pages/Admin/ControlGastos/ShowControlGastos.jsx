import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import Modal from '../../../Components/Modal/Modal'

export const ShowControlGastos = ({ _id, concepto, monto, fecha_gasto, comprobante, descripcion, imagen_mejora }) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <thead id="tabla-pagos" className="table bg-white">
                <tr>
                    <th scope="col">Concepto</th>
                    <th scope="col">Mes</th>
                    <th scope="col">Monto</th>
                    <th scope="col">Comprobante</th>
                </tr>
            </thead>
            <tbody>
                <tr id="tabla-pagos" className="table bg-white">
                    <th scope="row">{concepto}</th>
                    <td>{fecha_gasto}</td>
                    <td>{monto}</td>
                    <td>{descripcion}</td>

                    <button> <Link to="/admin/informacion-gasto">Ver Gasto</Link></button>
                    <h3 className="m-0 p-0">
                        <h3 className="m-0 p-0">
                            <Link to="/admin/GastosActualizarPage">
                                <i className="me-3 bi bi-pencil-fill" id="editar"></i>
                            </Link>
                        </h3>
                        <h3 className="m-0 p-0">

                            <i className="bi bi-trash-fill openModalBtn" id="borrar" onClick={() => setOpenModal(true)} style={{ cursor: 'pointer' }}></i>
                            {openModal && <Modal closeModal={setOpenModal} />}

                        </h3>
                    </h3>
                </tr>
            </tbody>

        </>



    );
}