import '../App.css';
import Filaradios from './filaradios';
import {useState,useEffect} from 'react';

const Secpregunta=(props)=>{
    const [opcresp,setopcresp]=useState(props.opc);
    const [nofilas,setnofilas]=useState(4);
    const [idfilas,setidfilas]=useState([0,1,2,3]);
    const [respuestas,setrespuestas]=useState([-1,-1,-1,-1]);
    const [titl,settitl]=useState(props.titulo);

    const Escucharespuesta=(id,idfila)=>{
        console.log("fila " + idfila + " radio " + id);
    }

    return(
        <div className='seccionpregunta'>
            <div className='flexrow altotitulos'>
                <h1 className='titulo1'>{titl}</h1>
                <i class="bi bi-info-circle-fill"></i>
            </div>
            <div>
                <div className='flexrow altotextos'>
                    {opcresp.map(item=>{
                        return(<p className='texto'>{item}</p>)
                    })}
                </div>
                <div className='filasseccion'>
                    {
                        idfilas.map((item,index)=>{
                            return(<Filaradios no={opcresp.length} idfil={index} funcionpadre={Escucharespuesta}></Filaradios>)
                        })
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default Secpregunta;