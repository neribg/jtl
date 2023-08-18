import React from "react";
import '../estilo/Testimonio.css';

//Función de javaScrip sin props del componente
function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imamen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt='Foto Emma' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
        <p className='cargo-testimonio'>Ingeniero de software en {props.empresa}</p>
        <p className='texto-testimonio'> "{props.testimonio1}".
        </p>
      </div>
    </div>
     
  );
}

export default Testimonio;