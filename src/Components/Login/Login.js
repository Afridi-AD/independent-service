import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import app from '../../firebase.init';



const auth = getAuth(app);

const Login = () => {
const [user,setUser] =useState({});
const [email,setEmail] =useState('');
const [password,setPassword]=useState('');
const [registered,setRegistered] =useState(false);
const provider = new GoogleAuthProvider();

const handlegoogleSignIn =()=>{
    signInWithPopup (auth,provider)
    .then(result =>{
    const user = result.user;
    setUser(user);

        
    })
   .catch(error=>{
   console.log(error)       
   })
}

const handleSignout = ()=>{
 signOut(auth)
.then(()=>{
  setUser({});  
})
.catch(error =>{
    setUser({});
})
}

const handleEmailBlur = (event)=>{
setEmail(event.target.value)
    
}

const handlePassWordBlur = (event)=>{
    setPassword(event.target.value)
    
}

const handleSubmit =(event)=>{
if(registered){
    signInWithEmailAndPassword(auth,email,password)
   .then(result=>{
   const user= result.user;
console.log(user);
       
   })
  .catch(error=>{
  console.log(error);
  })
}
else{
    createUserWithEmailAndPassword(auth,email,password)
.then(result=>{
const user =result.user;
console.log(user);
setEmail('');
setPassword('');
verfyEmail();
})
.catch(error=>{
    console.error(error);
})
}
    

event.preventDefault()
    
}

const verfyEmail =()=>{

    sendEmailVerification(auth.currentUser)
    .then(()=>{
     console.log('email verific')   
    })
}
const handleRegisterdChange=(event)=>{
    setRegistered(event.target.checked)
}
    return (
        <div>

<div className="registration w-50 mx-auto">
<h2 className='text-primary'>Please {registered ? 'Login':'Register' }</h2>

<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassWordBlur} type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check onChange={handleRegisterdChange} type="checkbox" label="All ready Registered" />
  </Form.Group>
  <Button variant="primary" type="submit">
    {registered ? 'Login' : 'Register'}
  </Button>
</Form>
</div>

{
    user.email ? <button onClick={handleSignout}>Signout</button>
    :
    <button onClick={ handlegoogleSignIn}>Goggle sing in</button>
    
}
            <h1>{user.displayName}</h1>
        </div>
    );
};

export default Login;