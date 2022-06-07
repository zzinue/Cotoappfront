import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ResidentesPage } from '../Pages/Residentes/ResidentesPage';
import { AdminHome} from '../Pages/AdminHome/AdminHome';
import { GastosPage } from '../Pages/GastosPage/GastosPage';

export const AdministratosRoutes = () => {
  return (
    <Routes>
    
      <Route path='residentes' element={<ResidentesPage />} />
     
      <Route path='/adminHome' element={<AdminHome />} />
      <Route path='/gastos' element={< GastosPage/>} />
    </Routes>
  );
};