import React from 'react';
import './index.css';
import background from '../Asset/background.jpg';
import Typewriter from 'typewriter-effect'
const HomeComponent = () => {

    return (
        <div className="Home-container">
            <div className="home-word1">Teta Racheal
          
             </div>
<p className="homeword2">I'm
<div className="homeword3" >
<Typewriter 
  options={{
    strings: ['Developer', 'Designer'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
</p>


        </div>
    )

};

export default HomeComponent;
