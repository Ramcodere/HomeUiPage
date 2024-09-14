import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './componets/Navbar'; 
import Hero from './componets/Hero';      // Assuming Hero is in the same folder
import '@fortawesome/fontawesome-free/css/all.min.css';


import viteLogo from '/vite.svg'
import './App.css'
import Footer from './componets/Footer';



function App() {
  return (
    <div>
      <Navbar /> {/* Navbar component ko yaha include karo */}
         <Hero />
         <Footer />


    </div>
    
  );
}

export default App;








