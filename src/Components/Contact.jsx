import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_cus105d', // replace with your EmailJS service ID
      'template_15vhc8i', // replace with your EmailJS template ID
      {
        from_name: formData.nombre,
        from_email: formData.correo,
        message: formData.mensaje
      },
      'C3bimnHN8hUdpU1aM' // replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Listo!', response.status, response.text);
      alert('El mensaje se ha enviado correctamente.');
    })
    .catch((error) => {
      console.log('Error.', error);
      alert('Hubo un problema al enviar el mensaje.');
    });
    
    // Clear the form
    setFormData({
      nombre: '',
      correo: '',
      mensaje: ''
    });
  };

  return (
    <div className='px-12 py-20 flex items-center justify-between bg-violet-50 '>

      <div className='flex flex-col justify-center '>
        <h1 className='mb-4 text-3xl'><strong>Contactanos.</strong></h1>
        <p className='text-xl text-gray-500'>Envianos un mail y nos pondremos en contacto a la brevedad.</p>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col justify-center'>

        <div className='pb-2 flex flex-col'> 
          <h1 className='text-md text-gray-500'>Nombre</h1>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className='w-128 h-8 p-2 rounded-lg outline-none'/>
        </div>

        <div className='pb-2 flex flex-col'>
          <h1 className='text-md text-gray-500'>Correo electrónico</h1>
          <input type="email" name="correo" value={formData.correo} onChange={handleChange} className='w-full h-8 p-2 rounded-lg outline-none'/>
        </div>

        <div className='pb-2 flex flex-col'>
          <h1 className='text-md text-gray-500'>Mensaje</h1>
          <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} className='w-full h-32 p-2 rounded-lg outline-none'></textarea>
        </div>

        <div className='text-center text-md text-gray-500'>
          <button type="submit" className='w-full mt-2 p-1 px-4 border border-gray-500 bg-white rounded-lg outline-gray-200 hover:border-black hover:text-black'>Enviar</button>
        </div>

      </form>

    </div>
  );
}

export default Contacto;
