import React from 'react';

export default function Aboutme() {
  return (
    <div className='containerAboutme'>
      <h3 className="text-2xl font-bold mb-4 titlePage">Sobre mí</h3>
      <p className="text-lg ">
        <i className="fa-solid fa-laptop-code text-purple-300 mr-1"></i>
        <span className="font-bold italic">Desarrolladora web</span> recién titulada en <span className="italic">Desarrollo de Aplicaciones Web</span>, y también con un <span className="font-bold italic">Grado Medio </span> en <span className="italic">Sistemas Microinformáticos y Redes (SMR)</span>.<br /><br />
        Después de cuatro años de formación, estoy lista para <span className="font-bold italic">crecer profesionalmente</span> en el mundo del desarrollo.<br /><br />

        <i className="fa-solid fa-tools text-yellow-400 mr-1"></i>
        Mi formación me ha permitido desarrollar habilidades en todas las áreas del desarrollo web, desde el diseño de interfaces hasta el despliegue de 
        aplicaciones en <i className="fa-brands fa-aws text-orange-500 mr-1"></i> <span className="italic">AWS</span>.<br /><br />

        A pesar de haber explorado diferentes áreas, me apasiona especialmente el <span className="font-bold italic">Frontend</span>. Disfruto del proceso de llevar ideas creativas a la realidad 
        a través del código, algo que conecta con mis hobbies creativos como la 
        <i className="fa-solid fa-camera-retro text-pink-400 ml-2 mr-1"></i><span className="italic">fotografía</span>, 
        <i className="fa-solid fa-cut text-green-500 ml-2 mr-1"></i><span className="italic">costura</span> y 
        <i className="fa-solid fa-utensils text-red-400 ml-2 mr-1"></i><span className="italic">cocina</span>. Fue esta pasión por crear lo que me llevó a 
        adentrarme en el mundo del desarrollo web.<br /><br />

        En cuanto a mi experiencia laboral, aunque no he trabajado como desarrolladora web, durante mi Grado Medio realicé prácticas en una empresa de fibra 
        óptica, donde adquirí experiencia en la industria. Además, en mi proyecto final, trabajé en equipo 
        <i className="fa-solid fa-people-arrows text-blue-400 ml-2 mr-1"></i>con un compañero, lo que fortaleció mis 
        <span className="font-bold italic"> habilidades de colaboración</span> y <span className="font-bold italic">resolución de problemas</span>.
      </p>
    </div>
  );
}
