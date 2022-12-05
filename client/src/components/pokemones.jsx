import React from "react";
import "../css/pokemones.css";
import Pokemon1 from "../icono/abra_pokemon.gif";
import Pokemon2 from "../icono/absol_pokemon.gif";
import Pokemon3 from "../icono/aerodactyl_pokemon.gif";
import Pokemon4 from "../icono/aipom_pokemon.gif";
import Pokemon5 from "../icono/ampharos.gif";
import Pokemon6 from "../icono/arcanine.gif";
import Pokemon7 from "../icono/charmander_shiny.gif";
import Pokemon8 from "../icono/cyndaquil.gif";
import Pokemon9 from "../icono/dragonair.gif";
import Pokemon10 from "../icono/drifloon.gif";
import Pokemon11 from "../icono/duskull.gif";
import Pokemon12 from "../icono/espeon.gif";
import Pokemon13 from "../icono/fennekin.gif";
import Pokemon14 from "../icono/flareon.gif";
import Pokemon15 from "../icono/ghastly.gif";
import Pokemon16 from "../icono/glaceon.gif";
import Pokemon17 from "../icono/houndour.gif";
import Pokemon18 from "../icono/snorlax.png";
import Pokemon19 from "../icono/jackhammer.gif";
import Pokemon20 from "../icono/jolteon.gif";
import Pokemon21 from "../icono/leafeon.gif";
import Pokemon22 from "../icono/lugia.gif";
import Pokemon23 from "../icono/luxray.gif";
import Pokemon24 from "../icono/mew.png";
import Pokemon25 from "../icono/mewtwo.png";
import Pokemon26 from "../icono/mightyena.gif";
import Pokemon27 from "../icono/pidgeot.gif";
import Pokemon28 from "../icono/wartortle.gif";
import Pokemon29 from "../icono/poochyena.gif";
import Pokemon30 from "../icono/pumpkaboo.gif";
import Pokemon31 from "../icono/rattata.gif";
import Pokemon32 from "../icono/purrloin.gif";
import Pokemon33 from "../icono/stool_spin.gif";
import Pokemon34 from "../icono/suicune.gif";
import Pokemon35 from "../icono/weavile.gif";
import Pokemon36 from "../icono/zapdos.gif";
import Pokemon37 from "../icono/arbok.gif";
import Pokemon38 from "../icono/cubone.gif";
import Pokemon39 from "../icono/umbreon (1).gif";
import Pokemon40 from "../icono/umbreon.gif";
import Icono1 from "../icono/umbreon_shiny.gif";
import Icono2 from "../icono/vaporeon.gif";
import Icono3 from "../icono/tepig_pokemon.gif";
import Icono4 from "../icono/raichu.gif";

export default function pokemones() {
  return (
    <div>
      <button className="button">
        <a href="/home">Salir al Home</a>
      </button>
      <h1 className="poketitulo">Pokemones mojis</h1>
      <img className="poke" src={Pokemon1} alt="Icono" />
      <img className="poke" src={Pokemon2} alt="Icono" />
      <img className="poke" src={Pokemon3} alt="Icono" />
      <img className="poke" src={Pokemon4} alt="Icono" />
      <img className="poke" src={Pokemon5} alt="Icono" />
      <img className="poke" src={Pokemon6} alt="Icono" />
      <img className="poke" src={Pokemon7} alt="Icono" />
      <img className="poke" src={Pokemon8} alt="Icono" />
      <img className="poke" src={Pokemon9} alt="Icono" />
      <img className="poke" src={Pokemon10} alt="Icono" />
      <img className="poke" src={Pokemon11} alt="Icono" />
      <img className="poke" src={Pokemon12} alt="Icono" />
      <img className="poke" src={Pokemon13} alt="Icono" />
      <img className="poke" src={Pokemon14} alt="Icono" />
      <img className="poke" src={Pokemon15} alt="Icono" />
      <img className="poke" src={Pokemon16} alt="Icono" />
      <img className="poke" src={Pokemon17} alt="Icono" />
      <img className="poke" src={Pokemon18} alt="Icono" />
      <img className="poke" src={Pokemon19} alt="Icono" />
      <img className="poke" src={Pokemon20} alt="Icono" />
      <img className="poke" src={Pokemon21} alt="Icono" />
      <img className="poke" src={Pokemon22} alt="Icono" />
      <img className="poke" src={Pokemon23} alt="Icono" />
      <img className="poke" src={Pokemon24} alt="Icono" />
      <img className="poke" src={Pokemon25} alt="Icono" />
      <img className="poke" src={Pokemon26} alt="Icono" />
      <img className="poke" src={Pokemon27} alt="Icono" />
      <img className="poke" src={Pokemon28} alt="Icono" />
      <img className="poke" src={Pokemon29} alt="Icono" />
      <img className="poke" src={Pokemon30} alt="Icono" />
      <img className="poke" src={Pokemon31} alt="Icono" />
      <img className="poke" src={Pokemon32} alt="Icono" />
      <img className="poke" src={Pokemon33} alt="Icono" />
      <img className="poke" src={Pokemon34} alt="Icono" />
      <img className="poke" src={Pokemon35} alt="Icono" />
      <img className="poke" src={Pokemon36} alt="Icono" />
      <img className="poke" src={Pokemon37} alt="Icono" />
      <img className="poke" src={Pokemon38} alt="Icono" />
      <img className="poke" src={Pokemon39} alt="Icono" />
      <img className="poke" src={Pokemon40} alt="Icono" />
      <div className="footer">
        <img className="footer_img" src={Icono1} alt="Icono" />
        <img className="footer_img" src={Icono2} alt="Icono" />
        <img className="footer_img" src={Icono3} alt="Icono" />
        <img className="footer_img" src={Icono4} alt="Icono" />
        <p className="footer_titulo">
          Todos los derechos reservados @ 2022 Full Stack Developer
        </p>
        <br /> <br />
      </div>
    </div>
  );
}
