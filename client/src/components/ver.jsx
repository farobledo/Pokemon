import React from "react";
import  "../components/ver.css";
import Foto1 from "../images/pokemon/dog.png";
import Foto2 from "../images/pokemon/food.png";
import Foto3 from "../images/pokemon/videojuegos.png";
import Foto4 from "../images/pokemon/countris.png";
import Foto5 from "../images/pokemon/pokemon.png";
import Foto6 from "../images/pokemon/optica.png";
import Foto from "../images/pokemon/foto_mia.jpg";
import Icono from "../icono/valor (1).gif";
import Icono1 from "../icono/aerodactyl_pokemon.gif";


export default function ver() {
  return (
    <>
     {/* creamso el button para que nos lleve a la ruta de home */}
      <button className="button">
        <a href="/home">Salir al Home</a>
      </button>
       <div class="card">
        <div class="card-body">
       
          <h1 class="entrada">Full Stack Developer</h1>
          
          <img className="mia" src={Foto} alt="" />
          
          {/* redes sociales  */}
          <a href="https://www.linkedin.com/in/andres-fernandez-7b1b4b1b3/">
            <img
              className="redes"
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt=""
            />
          </a>
          {/* github */}
          <a href="https://github.com/farobledo">
            <img
              className="redes"
              src="https://img.icons8.com/color/48/000000/github--v1.png"
              alt=""
            />
          </a>
          {/* faccebook */}
          <a href="https://www.facebook.com/andres.fernandez.399">
            <img
              className="redes"
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt=""
            />
          </a>
          <img className="icono" src={Icono} alt="" />
          <p className="entrada">Fabian Andres Robledo Olave</p>
          <p className="entrada">
            Decía Steve Jobs
            <br /> Que “todo el mundo debería aprender a programar un ordenador
            porque esto te ayuda a pensar”. <br /> Hoy en día la programación es
            una herramienta fundamental para el desarrollo de la tecnología
            moderna.
          </p>
         
        </div>
        <a href="https://github.com/farobledo/PI_VideoJuegos">
          <img src={Foto3} className="logo" alt="" />
        </a>
        <a href="https://github.com/farobledo/PI_VideoJuegos">
          <img src={Foto2} className="logo" alt="" />
        </a>
        <a href="https://github.com/farobledo/Proyecto_Dogs_2022">
          <img src={Foto1} className="logo" alt="" />
        </a>
        <a href="https://github.com/farobledo/Henry_Pi_Country">
          <img src={Foto4} className="logo" alt="" />
        </a>
        <a href="https://github.com/farobledo/Pokemon_Projecto">
          <img src={Foto5} className="logo" alt="" />
        </a>
        <a href="https://github.com/farobledo/Plataforma_Productos">
          <img src={Foto6} className="logo" alt="" />
        </a>
        <br /> <br />
        {/* todos los derechos reservados © 2021 */}
        <div className="derechos">
          <h4 className="derechos">Todos los derechos reservados © 2021 Full Stack Developer
          <img className="icono" src={Icono1} alt="" />
          </h4>
          
        </div>
      </div>
    </>
  );
}
