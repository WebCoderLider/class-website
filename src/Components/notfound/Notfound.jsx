import React from 'react';
import './Notfound.css';

function Notfound() {
  return (
    <div className="notfound-container">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops! Kechirasiz bu sahifa mavjud emas</h2>
        <p>Kechirasiz bu sahifa mavjud emas bosh sahifaga qaytish uchun pastdagi tugmani bosing!</p>
        <a href="/" className="home-link">Bosh sahifaga qaytish</a>
      </div>
    </div>
  );
}

export default Notfound;
