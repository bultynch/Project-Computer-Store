import React from 'react'
import { useSpring, animated } from 'react-spring';

function Imagenes() {
    const props = useSpring({
        from: { transform: 'translate3d(0%,0,0)' },
        to: { transform: 'translate3d(-100%,0,0)' },
        config: { duration: 25000 },
        reset: true,
        loop: true,
    });

    return (
        <div style={{ overflow: 'hidden' }} className='bg-violet-50 w-full h-60'>
            <animated.div style={props} className="flex items-center justify-center">
                <img src="https://cdn.durable.co/assets/logo-showcase/logo-ipsum-2.png" alt="Imagen 1" className="m-20 w-100 h-20" />
                <img src="https://cdn.durable.co/assets/logo-showcase/logo-ipsum-3.png" alt="Imagen 2" className="m-20 w-1/4 h-20" />
                <img src="https://cdn.durable.co/assets/logo-showcase/logo-ipsum-4.png" alt="Imagen 3" className="m-20 w-1/4 h-20" />
                <img src="https://cdn.durable.co/assets/logo-showcase/logo-ipsum-5.png" alt="Imagen 4" className="m-20 w-1/4 h-20" />
                <img src="https://cdn.durable.co/assets/logo-showcase/logo-ipsum-1.png" alt="Imagen 5" className="m-20 w-1/4 h-20" />

                {/* Duplica las imágenes */}
                <img src="https://cdn.durable.co/assets/logo-showcase/logo-ipsum-2.png" alt="Imagen 1" className="m-20 w-100 h-20" />
                <img src="https://cdn.durable.co/assets/logo-showcase/logo-ipsum-3.png" alt="Imagen 2" className="m-20 w-1/4 h-20" />
                <img src="https://cdn.durable.co/assets/logo-showcase/logo-ipsum-4.png" alt="Imagen 3" className="m-20 w-1/4 h-20" />
                <img src="https://cdn.durable.co/assets/logo-showcase/logo-ipsum-5.png" alt="Imagen 4" className="m-20 w-1/4 h-20" />
                <img src="https://cdn.durable.co/assets/logo-showcase/logo-ipsum-1.png" alt="Imagen 5" className="m-20 w-1/4 h-20" />
            </animated.div>
        </div>
    );
};

export default Imagenes;
