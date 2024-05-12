import React from 'react';

function Sponsors() {
  return (
    <marquee>
      <div className='px-20 w-full h-60 flex items-center justify-center'>
        {[1, 2, 3, 4, 5].map((index) => (
          <React.Fragment key={index}>
            <img src={`https://cdn.durable.co/assets/logo-showcase/logo-ipsum-${index}.png`} alt={`Imagen ${index}`} className="m-20 w-1/4 h-20"
            />
          </React.Fragment>
        ))}
      </div>
    </marquee>
  );
}

export default Sponsors;
