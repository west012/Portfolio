import React, { useState } from 'react';

import './App.css';


function App() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email: ', email);
    console.log('Password: ', password);
 };
 return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
 );
}


export default login;
