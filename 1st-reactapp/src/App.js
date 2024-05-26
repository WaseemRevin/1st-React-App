import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError('');
    setEmailError('');
    setMessageError('');

    let isValid = true;
    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    }
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }
    if (!message.trim()) {
      setMessageError('Message is required');
      isValid = false;
    }
    if (isValid) {
      console.log('Form submitted:', { name, email, message });
    }
  };
  const handleLearnMore = () => {
    console.log('Learn More button clicked');
    
  };

  return (
    <div>
      
      <div class="navbar">
        <div class="container">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li>
                    <a href="#services">Services</a>
                    
                    <ul>
                        <li><a href="#service1">Service 1</a></li>
                        <li><a href="#service2">Service 2</a></li>
                        <li><a href="#service3">Service 3</a></li>
                        <li><a href="#service4">Service 4</a></li>
                    </ul>
                </li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>



      {/* Banner section */}
      <section className="banner">
        <div className="overlay"></div>
        <div className="banner-content">
          <h2>Welcome to Our School</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt nisi cum explicabo alias soluta eos nulla dolor minima repellendus ipsum maxime odit error cumque, quae adipisci itaque quis, similique unde?</p>
          <button onClick={handleLearnMore}>Learn More</button>
        </div>
      </section>

      {/* Card container */}
      <div className="card-container">
        <div className="card-1">
          <div className="card-1-content">
            
            {/* <h2>Beautiful Scenery</h2>
            <p>Enjoy the view of nature's wonders!</p> */}
            <button onClick={handleLearnMore}>View More</button>
          </div>
        </div>
        <div className="card-2">
          <div className="card-1-content">
             {/* <h2>Beautiful Scenery</h2> */}
            {/* <p>Enjoy the view of nature's wonders!</p>  */}
            <button onClick={handleLearnMore}>View More</button>
          </div>
        </div>
        <div className="card-3">
          <div className="card-1-content">
            {/* <h2>Beautiful Scenery</h2>
            <p>Enjoy the view of nature's wonders!</p> */}
            <button onClick={handleLearnMore}>View More</button>
          </div>
        </div>
        {/* Add similar card components for card-2 and card-3 */}
      </div>

      {/* Form section */}
      <section className="form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Contact Us</h3>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            {nameError && <span className="error">{nameError}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            {messageError && <span className="error">{messageError}</span>}
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </p>
        <p>&copy; 2024 School Name. All rights reserved. | Designed by <a href="https://example.com" target="_blank">Muhammad Waseem</a></p>
      </footer>
    </div>
  );
}

export default App;
