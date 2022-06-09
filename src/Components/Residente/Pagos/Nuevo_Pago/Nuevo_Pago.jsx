import React from 'react';

import {Footer} from '../../../Home/Footer';
import {Navbar} from '../Principal/Navbar';
import {Formulario_Pago} from './Formulario_Pago';

export const Nuevo_Pago =()=>
{
    return(
        <div id="Principal-Container">
            <Navbar/>
            <Formulario_Pago/>
            <Footer/>
        </div>
    );
}