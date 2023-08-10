import React from 'react';
import Features from '../Components/Features';
import Services from '../Components/Services';
import Subscribe from '../Components/Subscribe';

function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        Welcome to our about page! Learn more about our services and features below:
      </p>
      <Features />
      <Services />
      <Subscribe />
    </div>
  );
}

export default About;
