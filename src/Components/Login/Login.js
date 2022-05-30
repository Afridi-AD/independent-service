import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../../Hooks/useFirebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const auth = getAuth(app);

const Login = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [error,setError] = useState('');
  const [user, setUser] = useState({});
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);
  const provider = new GoogleAuthProvider();


  const from =location?.state?.from?.pathname || "/"
  const handlegoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        navigate(from,{replace :toHaveFormValues})
        setUser(user);


      })
      .catch(error => {
        console.error(error);
      })
  }

 

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }

  const handleEmailBlur = (event) => {
    setEmail(event.target.value)

  }

  const handleNameBlur = event=>{
    setName(event.target.value);
  }

  const handlePassWordBlur = (event) => {
    setPassword(event.target.value)

  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
      setError('Password should contain at least one special charecter');
    }

    setValidated(true);
    setError('');
    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          

        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setEmail('');
          setPassword('');
          verfyEmail();
          SetUserName();

        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })
    }


    event.preventDefault()

  }

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast(' Reset password email sent')
      })
  }

  const SetUserName =()=>{
    updateProfile(auth.currentUser,{
      displayName : name
    })
    .then(()=>{
      
    })
    .catch(error=>{
      setError(error.message);
    })
  }

  const verfyEmail = () => {

    sendEmailVerification(auth.currentUser)
      .then(() => {
        toast(' Email verification sent')
      })
  }
  const handleRegisterdChange = (event) => {
    setRegistered(event.target.checked)
  }
  return (
    <div>

      <div className="registration w-50 mx-auto">
        <h2 className='text-primary text-center mt-2'>Please {registered ? 'Login' : 'Register'}</h2>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          { !registered && <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Your Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>}

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePassWordBlur} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegisterdChange} type="checkbox" label="All ready Registered" />
          </Form.Group>
          <p className='text-danger'>{error}</p>
          <Button onClick={handlePasswordReset} variant="link">Forget Password?</Button>
          <Button variant="primary" type="submit">
            {registered ? 'Login' : 'Register'}
          </Button>
          {/* <Button onClick={signInWithGoogle}>gggggSign</Button> */}
        </Form>
      </div>

      {/* <button className='primary w-5 mx-auto d-block mt-2 p-2' onClick={handlegoogleSignIn}>Goggle sing in</button> */}

      {
        user.email ? <Button className='primary w-5 mx-auto d-block mt-2 p-2' onClick={handleSignout}>Signout</Button>
          :
          <Button className='primary w-5 mx-auto d-block mt-2 p-2' onClick={handlegoogleSignIn}>Goggle sing in</Button>

      }
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;