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
    <div className='md:px-10 sm:px-2 py-20 flex flex-col md:flex-row items-center justify-between bg-violet-50 dark:bg-neutral-800'>

      <div className='mb-8 md:mb-0 md:mr-8 flex flex-col justify-center '>
        <h1 className='mb-4 text-3xl md:text-4xl dark:text-white'><strong>Contactanos.</strong></h1>
        <p className='text-xl text-gray-500 dark:text-white'>Envianos un mail y nos pondremos en contacto a la brevedad.</p>
      </div>

      <form onSubmit={handleSubmit} className='w-full max-w-lg flex flex-col justify-center '>

        <div className='pb-2 flex flex-col'>
          
          <input type="text" name="nombre" placeholder='Nombre' value={formData.nombre} onChange={handleChange} className='px-2 my-2 w-full h-11 flex items-start justify-center text-sm text-gray-400 border-b-2 outline-none rounded-md'/>

        </div>

        <div className='pb-2 flex flex-col'>
          <input type="email" name="correo" placeholder='Correo electrónico' value={formData.correo} onChange={handleChange} className='px-1 my-2 w-full h-11 flex items-start justify-center text-sm text-black border-b-2 outline-none rounded-md'/>
        </div>

        <div className='pb-2 flex flex-col'>
          <textarea name="mensaje" placeholder='Mensaje' value={formData.mensaje} onChange={handleChange} className='h-32 px-1 my-2 w-full flex items-start justify-center text-sm text-black border-b-2 outline-none rounded-md'></textarea>
        </div>

        <div className='text-center text-md text-gray-500'>
          <button type="submit" className='w-full mt-2 p-1 px-4 border border-gray-500 bg-white rounded-lg outline-gray-200 hover:border-black hover:text-black'>Enviar</button>
        </div>

      </form>

    </div>
  );
}

export default Contacto;
