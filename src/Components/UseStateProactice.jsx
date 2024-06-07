import React, { useState } from 'react'

function UseStateProactice() {

  const [contador, setContador] = useState('seleccionado');

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 'hola')} className='w-40 h-20 bg-red-500'>Suma</button>
      <button onClick={() => setContador(contador == 'seleccionar')} className='w-40 h-20 bg-blue-500'>Resta</button>
      <button onClick={() => setContador(contador * 4)} className='w-40 h-20 bg-yellow-500'>Multiply</button>
      <button onClick={() => setContador(contador / 4)} className='w-40 h-20 bg-green-500'>Divider</button>
    </div>
  )
}

export default UseStateProactice