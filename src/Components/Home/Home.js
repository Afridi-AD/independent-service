import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

import Service from './Service/Service';

const Home = () => {
    const [services,setService] =useState([]);
    useEffect(()=>{
        fetch('treatment.json')
        .then(res=> res.json())
        .then(data =>setService(data));
    },[])
    

    return (
       
        <div>
        <div>
        <Banner></Banner>
        </div>

           <div className='d-flex'>
               
           {
                services.map(service => <Service key={service.id}
                service={service}
                >

                </Service>)
            }
           </div>
          

            
        </div>
        
    
    );
};

export default Home;