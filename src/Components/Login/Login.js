import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import app from '../../firebase.init';
import useFirebase from '../../Hooks/useFirebase';



const auth = getAuth(app);

const Login = () => {
  const {signInwithgoogle} = useFirebase()
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);
  const provider = new GoogleAuthProvider();

  const handlegoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);


      })
      .catch(error => {
        console.log(error)
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

    setValidated(true);
    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);

        })
        .catch(error => {
          console.log(error);
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
        })
        .catch(error => {
          console.error(error);
        })
    }


    event.preventDefault()

  }

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('email sent')
      })
  }

  const verfyEmail = () => {

    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('email verific')
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
          <Button onClick={handlePasswordReset} variant="link">Forget Password?</Button>
          <Button variant="primary" type="submit">
            {registered ? 'Login' : 'Register'}
          </Button>
        </Form>
      </div>

      {
        user.email ? <button className='primary w-5 mx-auto d-block mt-2 p-2' onClick={handleSignout}>Signout</button>
          :
          <button className='primary w-5 mx-auto d-block mt-2 p-2' onClick={handlegoogleSignIn}>Goggle sing in</button>

      }
      
    </div>
  );
};

export default Login;