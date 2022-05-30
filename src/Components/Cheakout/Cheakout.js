import React, { useEffect, useState } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import Example from './Example';
import Offcanvas from './Example';
import Launch from './Launch';
import Treatment from './Treatment';

const Cheakout = () => {
    const [treatments, setTreatment] = useState([]);
    useEffect(() => {
        fetch('treatment.json')
            .then(res => res.json())
            .then(data => setTreatment(data));
    }, [])

    return (
        <div>
            <h1 className='text-center mt-5 mb-5'>We are ready to give you our best services</h1>
            
            
            <div className='justify-content-center align-items-center mb-5 ms-5'>
                <Launch></Launch>
                </div>


            <div className='d-flex'>
                {
                    treatments.map(treatment => <Treatment
                        key={treatment.id}
                        treatment={treatment}
                    ></Treatment>)
                }
            </div>

        </div>
    );
};

export default Cheakout;