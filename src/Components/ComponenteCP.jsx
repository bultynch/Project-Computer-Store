import React from 'react';

const Card = () => {
    return (
        
        <div className="flex flex-col border border-gray-300 w-72">
            <h1>Nuestros servicios</h1>
            <img src="https://cdn.pixabay.com/photo/2014/08/26/21/27/service-428539_1280.jpg" className="w-full h-full"/>
            <div className="p-4">
                <h2 className="font-bold text-lg mb-2">Reparación de computadoras</h2>
                <p className="text-gray-700">Especialistas en reparación de equipos informáticos. Solucionamos cualquier problema con eficiencia y rapidez.</p>
            </div>
        </div>
    );
}

export default Card;