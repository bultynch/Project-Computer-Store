import React, { useState, useEffect } from 'react';
import { BiUpArrowAlt } from "react-icons/bi";


function ScrollTopButton() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > 300){
        setShowScroll(true);

        } else if (showScroll && window.scrollY <= 300){
      setShowScroll(false);
    }
  };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
        window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    return (
    <button onClick={scrollTop} className={`fixed bottom-8 right-4 p-2 rounded-full bg-neutral-700 shadow-sm text-white hover:bg-neutral-600 dark:bg-white dark:text-black dark:hover:bg-neutral-200 ${showScroll ? 'block' : 'hidden'} z-50`}><BiUpArrowAlt className='w-8 h-8'/></button>
  )
}

export default ScrollTopButton