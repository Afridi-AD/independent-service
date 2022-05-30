import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Treatment = (props) => {
    const { name,picture,address} = props.treatment;
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
    <Button  variant="secondary">Get Appointment</Button>
  </Card.Body>
</Card>
                </div>
            </div>
   
        </div>
    );
};

export default Treatment;