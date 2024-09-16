import React from 'react';

export default function ContactCard() {
  return (
    <section className='containerContact flex flex-col items-center'>
        <figure className='flex items-center justify-center'>
           <img src="/img/profile.jpeg" alt="Foto perfil" /> 
        </figure>
        <h2>Judith Manjón</h2>
        <h3>Desarrolladora Web</h3>
        <button>
            <a href="/cv/judith-manjon-cv.pdf" download style={{ color: '#fefefe', textDecoration: 'none' }}>
            Descargar CV
            </a>
        </button>
        
        <h3 className='text-left w-full text-xl title'>Contacto</h3>

        <div>
            <i className="fa-solid fa-phone" style={{ color: '#fefefe' }}></i>
            <p>629 15 33 30</p>
        </div>

        <div>
            <i className="fa-solid fa-envelope" style={{ color: '#fefefe' }}></i>
            <p>judithmf00@gmail.com</p>
        </div>

        <div>
            <i className="fa-brands fa-github" style={{ color: '#fefefe' }}></i>
            <p>judithmf00</p>
        </div>

        <div>
            <i className="fa-brands fa-linkedin" style={{ color: '#fefefe' }}></i>
            <p>Judith Manjón Fernández</p>
        </div>
    </section>
  );
}
