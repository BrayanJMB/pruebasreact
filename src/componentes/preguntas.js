import '../App.css';
import Secpregunta from "./secpregunta"
import {useState,useEffect} from 'react';

const Preguntas=(props)=>{
    const [titulopregunta,settitulopregunta]=useState(props.titl);
    const [despregunta,setdespregunta]=useState(props.des);
    const [nombres,setnombres]=useState(["","","",""])
    const [titulorespuestas,settitulorespuestas]=useState(["Frecuencia","Agilidad","Calidad","Cercanía"]);
    const [subtitl,setsubtitl]=useState([["Varias veces por semana","1 o mas veces a la semana","1 o mas veces cada 2 semanas","1 vez al mes"],
        ["Con oportunidad de mejora","Cumple Expectativas","Por encima de las expectativas"],
        ["Con oportunidad de mejora","Cumple Expectativas","Por encima de las expectativas"],
        ["Relación Cercana","Relación Estrictamente laboral","Relación con fricciones"]])


    return(
        <div>
            <div>
                <h1>{titulopregunta}</h1>
            </div>
            <div>
                <p>{despregunta}</p>
            </div>
            <div className='flexrow'>
                <div className='flexcolum'>
                    <div className='encabnom'>
                        <h1 className='titulo1'>Nombre Empleado</h1>
                    </div>
                    {nombres.map(item=>{
                        return(<input type="text" className='campotexto'></input>)
                    })}
                </div>
                <div className='flexrow'>
                    {titulorespuestas.map((item,index)=>{
                        return(<Secpregunta opc={subtitl[index]} titulo={item}></Secpregunta>)
                    })}

                </div>
            </div>
            <div><p className='agregar'>+ Agregar</p></div>
        </div>
    )

}

export default Preguntas;