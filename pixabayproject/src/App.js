import React, {useState, useEffect} from 'react';
import Formulario from './Componentes/Formulario';
import Imagenes from './Componentes/Imagenes';

function App() {

  const [palabraBusqueda, guardarPalabraBusqueda] = useState('')
  const [imagenes, guardarImagenes] = useState([])
  const [paginaActual, guardarPaginaActual] = useState(1)
  const [totalPaginas, guardarTotalPaginas] = useState(1)

  useEffect(() => {
    if (palabraBusqueda === '') return;
    const per_page = 30
    const key = '15730638-9a18fce171d20cee91e86ab7f'
    const url = `https://pixabay.com/api/?&key=${key}&q=${palabraBusqueda}&per_page=${per_page}&page=${paginaActual}`
    const busqueda = async () =>{
      const resultado = await fetch(url)
      const resultadoJson = await resultado.json()
      guardarImagenes(resultadoJson.hits)

      //calculos del total de paginas
      const calculoTotalPaginas = Math.ceil(resultadoJson.totalHits/per_page)

      //colocar en el state
      guardarTotalPaginas(calculoTotalPaginas);
      //mover el scroll al tope

      const jumbotron = document.querySelector('.jumbotron')
      jumbotron.scrollIntoView({block: "end", behavior: "smooth"});
    }
    

    busqueda();
  },[palabraBusqueda, paginaActual])

  //accion del boton anterior

  const paginaAnterior = () => {
    
    //calculo de la nueva pagina actual
    const paginaactual = paginaActual - 1
    //pasar al state
    guardarPaginaActual(paginaactual)

  }

   //accion del boton siguiente
  const paginaSiguiente = () => {
    //calculo de la nueva pagina actual
    const paginaactual = paginaActual + 1
    //pasar al state
    guardarPaginaActual(paginaactual)
  }
  
  console.log(paginaActual);

  return (
    <div className="App container">
     <div className='jumbotron '>
       <p className='lead text-center'> Buscador de Imágenes</p>
        <Formulario
          guardarPalabraBusqueda={guardarPalabraBusqueda}
        />
     </div>
     <div className='row justify-content-center'>
      <Imagenes
        imagenes = {imagenes}
      />
      {(paginaActual === 1) 
        ? null 
        : <button
            type = 'button'
            className = 'btn btn-info mr-1'
            onClick = {paginaAnterior}
          >
            Anterior &laquo;
          </button> 
      }
      {(paginaActual === totalPaginas)
        ? null
        : <button
            type = 'button'
            className = 'btn btn-info '
            onClick = {paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
      }      
     </div>
    </div>
  );
}

export default App;
