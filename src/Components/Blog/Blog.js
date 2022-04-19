import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5 text-center'>
            <h4 >Difference between authentication and authorizaton ...</h4>
            <p> Authentication is one kind of process of identifing someone identity by his right regarding his validity.
                Where authorization is the process of giving someone permition to do somthing on the particullar event.
                Authentication is used by both side for example client and server.
                But authorization defins that what data are accessibli by a user.
                authentication does not ensure what tasks under on process on one person can do.
                It ensure that who or what system is actully.
                But Authorization is not needed all the time to access information.
            </p>

            <h4>Why we are using firebase?</h4>
            <p>Now a days everithing is going mobile and cloud. We use it because it is one kind of realtime database..
                Its give us many type authentication . We can use Cloude messeging by using it. 
                Real time store data. Site can be hosted. We can configure id remotly. </p>
                <h4>what other services does firebase provide other than authentication?</h4>
                <p>
                   Firebase provides us cloud firestore, cloud function, authentication, hosting, cloud storage, google analytics, predictions and cloud messaging 
                </p>
        </div>
    );
};

export default Blog;