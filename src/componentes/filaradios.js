import '../App.css';
import Radio from './radio';
import {useState,useEffect} from 'react';

const Filaradios=(props)=>{
    
    const [estadoradio,setestadoradio]=useState([]);
    const [activoradio,setactivoradio]=useState(-1);
    const [noradios,setnoradios]=useState(props.no);
    const [idseccion,setidseccion]=useState(props.idfil);

    useEffect(()=>{
        let arr=[];
        for(let i=0;i<noradios;i++){
            arr.push(false);
        }
        setestadoradio(arr);
    },[]);

    const cambiaradio=(id,estado)=>{
        console.log(id);
        let copiaestados=[...estadoradio];
        if(estado){
            if(id!=activoradio){
                if(activoradio>=0){
                copiaestados[activoradio]=false;
                }
                setactivoradio(id);
                copiaestados[id]=true;
                setestadoradio([...copiaestados]);
                props.funcionpadre(id,idseccion);
            }
        }
    }

    return(
        <div className='filaradios'>
            {estadoradio.map((item,index)=>{
                return(<Radio estfun={cambiaradio} est={estadoradio[index]} id={index}></Radio>)
            })}

        </div>
    )
}

export default Filaradios; 