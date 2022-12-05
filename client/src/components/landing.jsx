import React from "react";
import { useNavigate } from "react-router-dom";
import landing from "../css/landing.module.css";
import Foto from "../icono/umbreon_shiny.gif";
import Foto1 from "../icono/umbreon.gif";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className={landing.esta}>
      <h6 className={landing.titlulo}>Bienvenidos</h6>
    
      <h3>POKEMON Henry 2022</h3>
      <img className={landing.logo1} src={Foto1} alt="" />
      <div className={landing.estaButton1}>
        <button onClick={handleClick}>Entrar</button>
        <img className={landing.logo} src={Foto} alt="" />
      </div>
    </div>
  );
};

export default Landing;
