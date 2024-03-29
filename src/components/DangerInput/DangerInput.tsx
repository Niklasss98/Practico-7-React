

import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import DangerBar from '../DangerBar/DangerBar';





const DangerInput = () => {
  
    //Variable que va a guardar el valor elegido por el usuario
  const [value, setValue] = useState(0);

    //Actualiza el estado de value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  };

    return (
    <div className='m-3 w-50'>
        <h2>Ejemplo 1 - DangerInput</h2>

        {/*Componente Padre */}
        <Form.Range value={value} onChange={handleChange} />

        {/*Componente Hijo*/}
        <DangerBar value={value}/>
    </div>
  )
}

export default DangerInput;