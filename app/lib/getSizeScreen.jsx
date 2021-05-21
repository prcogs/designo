import { useState, useLayoutEffect } from 'react';

export const useWindowSize = () => {
   const [size, setSize] = useState([0, 0]);
   useLayoutEffect(() => {
     function updateSize() {
       setSize([window.innerWidth, window.innerHeight]);
     }
     window.addEventListener('resize', updateSize);
     updateSize();
     return () => window.removeEventListener('resize', updateSize);
   }, []);
   return size;
}

const getNameSizeOfScreen = () => {
   const [width, height] = useWindowSize();

   if(width >= 1024)   return "desktop"
   else if(width >= 768) return "tablet"
   else return "mobile"
}

export default getNameSizeOfScreen

