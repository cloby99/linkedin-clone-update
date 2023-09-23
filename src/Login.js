// Login.jsx
import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import {HiArrowSmRight} from 'react-icons/hi'

function Login() {
  const [name, setName] = useState("");
  // const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
    };

    dispatch(login(user));
  };

  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="" />

      <form onSubmit={loginToApp} className='login--form'>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Enter your Full Name' required/>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' required />
        {/* <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder='Profile picture URL (Optional)' /> */}

        <button type='submit'>Home Page <HiArrowSmRight className='direct--icon'/></button>
      </form>
    </div>
  );
}

export default Login;
