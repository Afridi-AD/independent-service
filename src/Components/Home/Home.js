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

    <section className='container'>
 
<div className="row">
<Banner></Banner>
</div>
<div className="row">
<h1 className='text-center mb-4 text-success'>Our Services...</h1>
</div>
<div className="row">
    <div className="d-flex col-md-6 col-lg-3">
       {
                services.slice(0,3).map(service => <Service key={service.id}
                service={service}
                >

                </Service>)
            }
    </div>
    <div className="row">
    <Review></Review>
    </div>
    <Footer></Footer>
</div>
    </section>
       
       
        
    
    );
};

export default Home;