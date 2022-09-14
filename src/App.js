
import './App.css';

import {Fragment, useState} from 'react';

import Preguntas from './componentes/preguntas';
import Logo from './componentes/PeopleIntelligence.png'

function App() {
  const [etapas,setetapas]=useState(1);

  const Competapas=()=>{
    switch(etapas){
      case 1:
        return(<div className='tarjeta'>
          <div>
            <p>
            Hola nombre_persona <br/>

Bienvenido a nuestra herramienta de recolección de  datos para el desarrollo del análisis de redes organizacionales que nombre_empresa esta desarrollando. <br/>

A continuación te formularemos seis preguntas, que te tomaran alrededor de 10 minutos responder. <br/>

Esta información nos ayudara a entender las redes internas de colaboración y como potencializar el impactos positivos que estas tienen en el desarrollo de las funciones de las diversas áreas funcionales y de los empelados que las componen.


            </p>
          </div>
          <div className='controles' >
            <i class="bi bi-arrow-right-circle" style={{fontSize:"30px"}} onClick={()=>{controlpasos(2)}}></i>
          </div>

        </div>)
        break;
      case 2:
        return(<div className='tarjeta'>
          <div>
            <h1>Política de tratamiento de datos</h1>
            <p>
            La información capturada por nuestro sistema será utilizada expresamente para uso interno de la compañía y será usada exclusivamente el desarrollo de este ejercicio.<br/>

Para conocer mas acerca de nuestra política de tratamiento de datos puede hacer clic en el siguiente enlace

            
            </p>
          </div>
          <div className='controles' >
            <i class="bi bi-arrow-right-circle" style={{fontSize:"30px"}} onClick={()=>{controlpasos(3)}}></i>
          </div>
          
        </div>)
      case 3:
        return(<div className='tarjeta'>
          <Preguntas titl="Relación General:" des="1. ¿Cuándo necesitas ayuda en tus responsabilidades a qué personas acudes?"></Preguntas>
          <Preguntas titl="Relación Información:" des="2. ¿Cuándo necesitas información actualizada y de confianza sobre la empresa a quienes acudes?"></Preguntas>
          <Preguntas titl="Relación Inspiracional:" des="3. ¿Cuándo necesitas consejos o feedback, quién es la personas indicada para ti?"></Preguntas>
          <div className='controles' >
            <i class="bi bi-arrow-right-circle" style={{fontSize:"30px"}} onClick={()=>{controlpasos(5)}}></i>
          </div>
        </div>)
      case 4:
        return(<div className='tarjeta'>
          return(<Fragment></Fragment>);
          
        </div>)
      case 5:
        return(<div className='tarjeta'>
          <div className='flexcolum'>
            <h1>¡Muchas gracias por tu participación!</h1>
            <h3>Tu información ha sido registrada exitosamente</h3>
          </div>
          
        </div>)
      
      default:
        return(<Fragment></Fragment>);
    }
  }
  const controlpasos=(paso)=>{
    setetapas(paso);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='encabezado'>
          <h1 className='tituloencabezado'>Organizational Network Analysis</h1>
          <img className='logoencabezado' src={Logo}></img>
        </div>
  
        
      </header>
      <Competapas></Competapas>
      {/*<div className='tarjeta'>
        <Preguntas titl="Relación General:" des="1. ¿Cuándo necesitas ayuda en tus responsabilidades a qué personas acudes?"></Preguntas>
  </div>*/}
      
    </div>
  );
}

export default App;
