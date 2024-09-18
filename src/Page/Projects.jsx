import React from 'react';

export default function Projects() {
  return (
    <>
      <h3 className="text-xl sm:text-2xl font-bold mb-4 titlePage">Proyectos</h3>
      <section className='containerProjects'>
        <article className='project p-2'>
          <h4 className='text-sm sm:text-lg lg:text-2xl font-semibold mb-2'>Contador de calorías <span className='italic font-mono text-xs sm:text-sm lg:text-lg text-red-500'>(En desarrollo)</span></h4>
          <div className='block lg:flex containerProject p-0 sm:p-2'>
            <a href="https://judithmf00.github.io/contadorCalorias/" target="_blank">
              <figure>
                  <img src="/img/contadorCalorias.PNG" alt="Página contador de calorías" />
                  <i className="fas fa-eye"></i>
              </figure>
            </a>
              
            <div className='hidden lg:block'>
              <p className='project__description'>
                Este proyecto permite registrar las calorías que quemamos o consumimos en función de diferentes actividades 
                (por ejemplo, <span className='italic'>bicicleta</span>, <span className='italic'>caminar</span>) y comidas 
                (como <span className='italic'>manzana</span>, <span className='italic'>hamburguesa</span>).
                La comida <span className='font-semibold italic'>incrementa</span> las calorías, mientras que el ejercicio <span className='font-semibold italic'>las reduce</span>, 
                mostrando al final la diferencia para saber si <span className='font-bold'>quemamos</span> más de lo que consumimos.
              </p>
              <aside>
                <p className='font-semibold'>Tecnologías empleadas:</p>
                <div className='gap-3'>
                  <i className="fab fa-html5" style={{ color: '#E34F26' }}></i>
                  <i className="fab fa-css3-alt" style={{ color: '#1572B6' }}></i>
                  <i className="fab fa-js" style={{ color: '#F7E018' }}></i>
                  <i className="fab fa-react" style={{ color: '#61DAFB' }}></i>
                  <i className="fab fa-sass" style={{ color: '#CC6699' }}></i>
                  <img src="/img/tailwincss.png" alt="Icono tailwincss" />
                  <img src="/img/typescript.png" alt="Icono typescript" />
                </div>
              </aside>
            </div>
          </div>
          <div className="buttonsProjects flex justify-center items-center space-x-4">
            <a href="https://github.com/judithmf00/contadorCalorias" target="_blank" className="w-8 h-8 sm:w-12 sm:h-12">
              <i className="fab fa-github text-white text-xl sm:text-2xl lg:text-3xl w-full h-full"></i>
            </a>
            <a href="https://www.figma.com/proto/xHFD15IQqfLJLGCjN4ls7e/Contador-de-calorias?node-id=1-2&node-type=canvas&t=lpBryj9nEVgNZUra-1" target="_blank" className="w-8 h-8 sm:w-12 sm:h-12">
              <i className="fab fa-figma text-white text-2xl sm:text-3xl lg:text-4xl w-full h-full"></i>
            </a>
          </div>
        </article>
        <article className='project p-2'>
          <h4 className='text-sm sm:text-lg lg:text-2xl font-semibold mb-2'>Calculadora de propinas</h4>
          <div className='block lg:flex containerProject  p-0 sm:p-2'>
              <a href="https://judithmf00.github.io/contadorCalorias/" target="_blank">
                <figure>
                  <img src="/img/calculadoraPropinas.PNG" alt="Página calculadora de propinas" />
                  <i className="fas fa-eye"></i>
                </figure>
              </a>
              
              <div className='hidden lg:block'>
                <p className='project__description'>
                  Incluye un <span className='italic'>menú</span> con platos de un restaurante que se pueden añadir a la comanda. 
                  Además, permite seleccionar el <span className='italic font-semibold'>porcentaje de propina</span> a dejar y realiza el cálculo del <span className='italic'>subtotal</span>, la <span className='italic'>propina</span> y el <span className='italic'>total</span>.
                </p>
                <aside>
                  <p className='font-semibold'>Tecnologías empleadas:</p>
                  <div>
                    <i className="fab fa-html5" style={{ color: '#E34F26' }}></i>
                    <i className="fab fa-css3-alt" style={{ color: '#1572B6' }}></i>
                    <i className="fab fa-js" style={{ color: '#F7E018' }}></i>
                    <i className="fab fa-react" style={{ color: '#61DAFB' }}></i>
                    <i className="fab fa-sass" style={{ color: '#CC6699' }}></i>
                    <img src="/img/tailwincss.png" alt="Icono tailwincss" />
                    <img src="/img/typescript.png" alt="Icono typescript" />
                  </div>
                </aside>
              </div>
          </div>
          <div className="buttonsProjects flex justify-center items-center space-x-4">
            <a href="https://github.com/judithmf00/calculadoraComandas" target="_blank" className="w-8 h-8 sm:w-12 sm:h-12">
              <i className="fab fa-github text-2xl sm:text-3xl lg:text-4xl w-full h-full" style={{ color: '#fefefe' }}></i>
            </a>
            <a href="https://www.figma.com/proto/pCDgqQQl6wuH9pM372ujxc/Calculadora-comandas?t=GLPD6Q2KJzBRKzHa-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2" target="_blank" className="w-8 h-8 sm:w-12 sm:h-12">
              <i className="fab fa-figma text-2xl sm:text-3xl lg:text-4xl w-full h-full" style={{ color: '#fefefe' }}></i>
            </a>
          </div>
        </article>
        <article className='project p-2'>
          <h4 className='text-sm sm:text-lg lg:text-2xl font-semibold mb-2'>Películas del studio ghibli</h4>
          <div className='block lg:flex containerProject p-0 sm:p-2'>
            <a href="https://judiith-mf.github.io/PeliculasStudioGhibli/" target="_blank">
              <figure>
                <img src="/img/studioGhibli.PNG" alt="Página studio ghibli" />
                <i className="fas fa-eye"></i>
              </figure>
            </a>
              
            <div className='hidden lg:block'>
              <p className='project__description'>
                <span className='font-semibold'>Primer proyecto realizado en React,</span> los datos de las <span className='font-semibold'>películas</span> se obtienen de una <span className='font-semibold'>API</span>, donde se listan todas las películas del <span className='font-semibold'>Studio Ghibli</span>. 
                Al seleccionar una, se puede ver su <span className='italic'>detalle</span>, incluyendo información como la <span className='italic'>puntuación</span> y los <span className='italic'>personajes</span>.
              </p>
              <aside>
                <p className='font-semibold'>Tecnologías empleadas:</p>
                <div>
                  <i className="fab fa-html5" style={{ color: '#E34F26' }}></i>
                  <i className="fab fa-css3-alt" style={{ color: '#1572B6' }}></i>
                  <i className="fab fa-js" style={{ color: '#F7E018' }}></i>
                  <i className="fab fa-react" style={{ color: '#61DAFB' }}></i>
                </div>
              </aside>
            </div>
          </div>
        </article>
        <article className='project p-2'>
          <h4 className='text-sm sm:text-lg lg:text-2xl font-semibold mb-2'>Coctelería</h4>
          <div className='block lg:flex containerProject p-0 sm:p-2'>
              <a href="https://judithmf00.github.io/coctelesJavascriptApi/" target='_black'>
                <figure>
                  <img src="/img/cocteles.PNG" alt="Página de coctelería" />
                  <i className="fas fa-eye"></i>
                </figure>
              </a>
              
              <div className='hidden lg:block'>
                <p className='project__description'>
                  <span className='font-semibold'>Proyecto de clase </span> en el cual debíamos crear una aplicación utilizando una <span className='font-semibold'>API</span>. En mi caso, utilicé <span className='italic font-semibold'>'thecocktaildb'</span>. 
                  La aplicación permite <span className='italic'>visualizar todos los cócteles</span> disponibles en la API, <span className='italic'>realizar búsquedas filtradas</span>, <span className='italic'>buscar por nombre</span>, 
                  <span className='italic'>ordenar de forma ascendente o descendente</span>, ver los <span className='italic'>detalles de cada cóctel</span>, <span className='italic'>añadir al pedido el cóctel</span> y revisar el <span className='italic'>resumen de la comanda</span>.
                </p>

                <aside>
                  <p className='font-semibold'>Tecnologías empleadas:</p>
                  <div>
                    <i className="fab fa-html5" style={{ color: '#E34F26' }}></i>
                    <i className="fab fa-css3-alt" style={{ color: '#1572B6' }}></i>
                    <i className="fab fa-js" style={{ color: '#F7E018' }}></i>
                    <i className="fab fa-react" style={{ color: '#61DAFB' }}></i>
                  </div>
                </aside>
              </div>
          </div>
          <div className="buttonsProjects flex justify-center items-center space-x-4">
            <a href="https://github.com/judithmf00/coctelesJavascriptApi" target='_black'  className="w-8 h-8 sm:w-12 sm:h-12">
              <i className="fab fa-github text-xl sm:text-2xl lg:text-3xl w-full h-full" style={{ color: '#fefefe' }}></i>
            </a>
          </div>
        </article>
        <article className='project p-2'>
          <h4 className='text-sm sm:text-lg lg:text-2xl font-semibold mb-2'>Tienda de guitarras</h4>
          <div className='block lg:flex containerProject p-0 sm:p-2'>
            <a href="https://judithmf00.github.io/shopGuitar/" target='_black'>
              <figure>
                <img src="/img/shopGuitar.PNG" alt="Página tienda de guitarras" />
                <i className="fas fa-eye"></i>
              </figure>
            </a>
            <div className='hidden lg:block'>
              <p className='project__description'>
                <span className='italic'>Catálogo</span> donde puedes <span className='italic font-semibold'>agregar guitarras</span> al carrito, ver un <span className='italic'>resumen del pedido</span>, 
                <span className='italic'>modificar la cantidad</span> de productos o <span className='italic'>eliminar artículos</span>, y visualizar el <span className='italic font-semibold'>total a pagar</span>.
              </p>

              <aside>
                <p className='font-semibold'>Tecnologías empleadas:</p>
                <div>
                  <i className="fab fa-html5" style={{ color: '#E34F26' }}></i>
                  <i className="fab fa-css3-alt" style={{ color: '#1572B6' }}></i>
                  <i className="fab fa-js" style={{ color: '#F7E018' }}></i>
                  <i className="fab fa-react" style={{ color: '#61DAFB' }}></i>
                  <i className="fab fa-sass" style={{ color: '#CC6699' }}></i>
                </div>
              </aside>
            </div>
          </div>
          <div className="buttonsProjects flex justify-center items-center space-x-4">
            <a href="https://github.com/judithmf00/shopGuitar" target='_black' className="w-8 h-8 sm:w-12 sm:h-12">
              <i className="fab fa-github text-xl sm:text-2xl lg:text-3xl w-full h-full" style={{ color: '#fefefe' }}></i>
            </a>
            <a href="https://www.figma.com/proto/h4SC1UHcyWvel2gHOoX7sg/Shop-Guitar?node-id=1-2&t=4g9z4EyVwLwSCzUG-1" target='_black' className="w-8 h-8 sm:w-12 sm:h-12">
              <i className="fab fa-figma text-xl sm:text-2xl lg:text-3xl w-full h-full" style={{ color: '#fefefe' }}></i>
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
