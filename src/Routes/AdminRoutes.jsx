import React from "react";
import { Route, Routes } from "react-router-dom";

import { AdminHome } from "../Pages/Admin/AdminHome/AdminHome";
import { GastosPage } from "../Pages/Admin/GastosPage/GastosPage";
import ControlGastos from "../Pages/Admin/ControlGastos/ControlGastos";
import InformacionGasto from "../Pages/Admin/InformacionGasto/InformacionGasto";
import GastosCrear from "../Pages/Admin/GastosCrear/GastosCrear";
import GastosActualizarPage from "../Pages/Admin/GastoActualizar/GastosActualizarPage";

import { PagosPage } from "../Pages/Pagos/PagosPage";
import { BuscarPagosPage } from "../Pages/Pagos/BuscarPagosPage";
import { BuscarPagosAnioPage } from "../Pages/Pagos/BuscarPagosAnioPage";
import { CreatePagosPage } from "../Pages/Pagos/CreatePagosPage";
import { UpdatePagosPage } from "../Pages/Pagos/UpdatePagosPage";

import { ResidentesPage } from "../Pages/Admin/Residentes/ResidentesPage";
import { BuscarResidentesPage } from "../Pages/Admin/Residentes/BuscarResidentesPage";
import { CreateResidentesPage } from "../Pages/Admin/Residentes/CreateResidentesPage";
import { UpdateResidentesPage } from "../Pages/Admin/Residentes/UpdateResidentesPage";
import { RegisterAdmins } from "../Pages/RegisterAdmins/RegisterAdmins";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/residentes" element={<ResidentesPage />} />
      <Route path="/buscarResidente" element={<BuscarResidentesPage />} />
      <Route path="/crearResidente" element={<CreateResidentesPage />} />
      <Route path="/actualizarResidente" element={<UpdateResidentesPage />} />

      <Route path="/pagos" element={<PagosPage />} />
      <Route path="/buscarPago" element={<BuscarPagosPage />} />
      <Route path="/buscarPagoAnio" element={<BuscarPagosAnioPage />} />
      <Route path="/crearPagos" element={<CreatePagosPage />} />
      <Route path="/actualizarPago" element={<UpdatePagosPage />} />

      <Route path="/adminHome" element={<AdminHome />} />
      <Route path="/controlGastos" element={<ControlGastos />} />
      <Route path="/informacion-gasto" element={<InformacionGasto />} />
      <Route path="/GastosCrear" element={<GastosCrear />} />
      <Route path="/GastosActualizarPage" element={<GastosActualizarPage />} />
      <Route path="/registerAdmins" element={<RegisterAdmins />} />
    </Routes>
  );
};
