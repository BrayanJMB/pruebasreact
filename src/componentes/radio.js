import React, { Fragment } from "react";
import { useEffect, useState } from "react";

const Radio=(props)=>{
    const [idradio,setidradio]=useState(props.id);

    const cambiaestado=(estado)=>{
        props.estfun(idradio,estado);
    }

    if(props.est==false){
        return(
            <Fragment>
                <div onClick={()=>{cambiaestado(true)}} className="radio">
                    <i class="bi bi-record" style={{fontSize:"18px"}}></i>
                </div>
            </Fragment>
        )
    }else{
        return(
            <Fragment>
                <div onClick={()=>{cambiaestado(false)}} className="radio">
                    <i class="bi bi-record2" style={{fontSize:"18px"}}></i>
                </div>   
            </Fragment>
        )

    }
   
    
}

export default Radio;