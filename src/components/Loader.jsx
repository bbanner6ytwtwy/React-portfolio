import { ColorRing } from 'react-loader-spinner'
import React, { useEffect, useState } from 'react';

const PageLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 7000);
  
      return () => clearTimeout(timer);
    }, []);
  
  return (
    <>
    
    
    <div>
      {isLoading ? (
        <div className='z-50 bg-black w-screen fixed top-0 h-screen flex flex-col items-center justify-center'>
        <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        color="brown"
      /><h1 className='text-red-900 text-xl'>Loading... Please be Patient...</h1>
    </div> 
      ) : null}
    </div></>
  );
};

export default PageLoader;
