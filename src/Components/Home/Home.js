import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Review from './Review';

import Service from './Service/Service';

const Home = () => {
    const [services,setService] =useState([]);
    useEffect(()=>{
        fetch('treatment.json')
        .then(res=> res.json())
        .then(data =>setService(data));
    },[])
    

    return (
       
        <div  className=' col-md-6 col-lg-12'>
        <div className='text-center'>
        <Banner></Banner>
        </div>
           <h1 className='text-center mb-4'>Our Services...</h1>
           <div className='d-flex col-md-6 col-lg-12' >
               
           {
                services.slice(0,3).map(service => <Service key={service.id}
                service={service}
                >

                </Service>)
            }
           </div>

           <div className='justify-content-center align-items-center'>
               <Review></Review>
           </div>
          
           <Footer></Footer>
            
        </div>
        
    
    );
};

export default Home;