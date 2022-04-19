import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { name,picture,address} =props.service
    const navigate = useNavigate()
    const showReviews =()=>{
    const path =`/cheakout/`;
    navigate(path);
    }

    return (
        <div className='container '>
            <div className="row col-lg-12 col-md-6">
                <div className="col-lg-12 col-md-6">
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={picture} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {address}
    </Card.Text>
    <Button onClick={()=>navigate('/cheakout')} variant="primary">Get Appointment</Button>
  </Card.Body>
</Card>
                </div>
            </div>
   
        </div>
    );
};

export default Service;