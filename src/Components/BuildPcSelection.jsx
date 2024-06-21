import React from 'react';

function BuildPcSelection() {
  return (
    <div className="w-128 p-4 rounded-lg border shadow-sm flex flex-col gap-4 bg-white dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24">
            <path d="M12 2L2 7l8 5 8-5-10-5zM12 9L2 14l8 5 8-5-10-5zM12 16L2 21l8 5 8-5-10-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg">Procesador</h3>
          <p className="text-gray-500">Todavia no seleccionaste Procesador</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24">
            <path d="M12 2L2 7l8 5 8-5-10-5zM12 9L2 14l8 5 8-5-10-5zM12 16L2 21l8 5 8-5-10-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg">Motherboard</h3>
          <p className="text-gray-500">Todavia no seleccionaste Motherboard</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24">
            <path d="M12 2L2 7l8 5 8-5-10-5zM12 9L2 14l8 5 8-5-10-5zM12 16L2 21l8 5 8-5-10-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg">Memoria Ram</h3>
          <p className="text-gray-500">Todavia no seleccionaste Memoria Ram</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24">
            <path d="M12 2L2 7l8 5 8-5-10-5zM12 9L2 14l8 5 8-5-10-5zM12 16L2 21l8 5 8-5-10-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg">Disco Duro</h3>
          <p className="text-gray-500">Todavia no seleccionaste Disco Duro</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24">
            <path d="M12 2L2 7l8 5 8-5-10-5zM12 9L2 14l8 5 8-5-10-5zM12 16L2 21l8 5 8-5-10-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg">Disco SSD</h3>
          <p className="text-gray-500">Todavia no seleccionaste Disco SSD</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24">
            <path d="M12 2L2 7l8 5 8-5-10-5zM12 9L2 14l8 5 8-5-10-5zM12 16L2 21l8 5 8-5-10-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg">Tarjeta gráfica</h3>
          <p className="text-gray-500">Todavia no seleccionaste Tarjeta gráfica</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24">
            <path d="M12 2L2 7l8 5 8-5-10-5zM12 9L2 14l8 5 8-5-10-5zM12 16L2 21l8 5 8-5-10-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg">Fuente</h3>
          <p className="text-gray-500">Todavia no seleccionaste Fuente</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24">
            <path d="M12 2L2 7l8 5 8-5-10-5zM12 9L2 14l8 5 8-5-10-5zM12 16L2 21l8 5 8-5-10-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg">Gabinete</h3>
          <p className="text-gray-500">Todavia no seleccionaste Gabinete</p>
        </div>
      </div>

    </div>
  );
}

export default BuildPcSelection;