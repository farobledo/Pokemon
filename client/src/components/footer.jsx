import React from "react";
import footer from "../css/footer.module.css";
import Icono1 from "../icono/weavile.gif";
import Icono2 from "../icono/abra_pokemon.gif";
import Icono3 from "../icono/arbok.gif";
import Icono4 from "../icono/cyndaquil.gif";

const Footer = () => {
  return (
    // creamos un titulo con una imagen
    <div className={footer.footer}>
      <img className={footer.img} src={Icono1} alt="Icono" />
      <img className={footer.img} src={Icono2} alt="Icono" />
      <img className={footer.img} src={Icono3} alt="Icono" />
      <img className={footer.img} src={Icono4} alt="Icono" />
      <p className={footer.title}>Todos los derechos reservados @ 2022 Full Stack Developer</p>
    </div>
  );
};

export default Footer;
