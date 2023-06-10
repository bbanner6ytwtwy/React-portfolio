import { CirclesWithBar } from 'react-loader-spinner'
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
        <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel='circles-with-bar-loading'
      /><h1 className='text-red-800 text-xl'>Loading... Please be Patient...</h1>
    </div> 
      ) : null}
    </div></>
  );
};

export default PageLoader;
