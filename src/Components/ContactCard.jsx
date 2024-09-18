import {useState} from 'react';

export default function ContactCard() {

    return (
        <section className='containerContact flex flex-col items-center p-2'>
            <figure className='flex items-center justify-center w-16 lg:w-24'>
                <img src="/img/profile.jpeg" alt="Foto perfil" /> 
            </figure>
            <h2 className='text-sm sm:text-lg lg:text-2xl text-center'>Judith Manjón</h2>
            <h3 className='text-xs sm:text-base lg:text-lg text-center sm:font-normal font-bold'>Desarrolladora Web</h3>

            <button>
                <a href="/cv/judith-manjon-cv.pdf" 
                    download 
                    style={{ color: '#fefefe', textDecoration: 'none' }} 
                    className='hidden sm:block'
                >
                Descargar CV
                </a>
                <img src="/img/cv (1).png" alt=""  className='block sm:hidden  my-1 lg:mt-0'/>
            </button>
            
            <h3 className='text-left w-full text-xl title hidden sm:block'>Contacto</h3>

            <div>
                <a href="tel:+34629153330" className="flex items-center sm:justify-start sm:mt-0 justify-center mt-5">
                    <i className="fa-solid fa-phone text-2xl sm:text-base" style={{ color: '#fefefe' }}></i>
                    <p  className='hidden sm:block'>629 15 33 30</p>
                </a>
            </div>

            <div>
                <a href="mailto:judithmf00@gmail.com" className="flex items-center sm:justify-start sm:mt-0 justify-center mt-5">
                    <i className="fa-solid fa-envelope text-2xl sm:text-base" style={{ color: '#fefefe' }}></i>
                    <p className='hidden sm:block'>judithmf00@gmail.com</p>
                </a>
            </div>

            <div>
                <a href="https://github.com/judithmf00" className="flex items-center sm:justify-start sm:mt-0 justify-center mt-5" target='_black'>
                    <i className="fa-brands fa-github text-2xl sm:text-base" style={{ color: '#fefefe' }}></i>
                    <p className='hidden sm:block'>judithmf00</p> 
                </a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/judith-manj%C3%B3n-fern%C3%A1ndez-3b388a2aa/" target='_black' className="flex items-center sm:justify-start sm:mt-0 justify-center mt-5">
                    <i className="fa-brands fa-linkedin text-2xl sm:text-base" style={{ color: '#fefefe' }}></i>
                    <p className='hidden sm:block'>Judith Manjón Fernández</p> 
                </a>
            </div>
        </section>
    );
}
