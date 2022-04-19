import React from 'react';
import Afridi from '../../images/Afridi.jpg'

const AboutMe = () => {
    return (
        <div className='container'>
        <div className="row">
            <div className="col-lg-12">
            <div className='mb-5 mt-4 img-fluid  border-radious '>
        <img src={Afridi} alt="" />
        </div>
        <h4>
            My goal.....
        </h4>
        <p> If I say something about my goal I would say my goal is to go to jannaha . Because I know the succcess is iman . Evrey person will be accountable his or her own deeds . But regarding the temporary world I want to be a web developer and to be a software developer latter .
            In the past I was not interested about coding but now I love to code very much. </p>
            </div>
        </div>


        
        
    </div>
    );
};

export default AboutMe;