import React, { useCallback } from "react";
import { getPokemons, getTypes } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  filterType,
  filterApiOrDb,
  filterAlphab,
  filterPower,
  filterHeight,
  filterWeight,
} from "../functions/filters";
import Card from "./card";
import Loading from "./loading";
import ButtonPage from "./buttonPage";
import ButtonReset from "./buttonReset";
import Footer from './footer';
import home from "../css/home.module.css";
import thunder from "../images/thunder.png";
import imgPokemons from "../images/pokemon/picachu2.jpg";
import Nav from "../components/nav";
import Icono from "../icono/espeon.gif";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [pokemonReact, setPokemonReact] = React.useState({ ...state });
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  React.useEffect(() => {
    setPokemonReact({ ...state });
  }, [state]);

  React.useEffect(() => {
    if (pokemonReact.pokemons.length > 0) {
      setLoading(false);
    }
    return () => {
      setLoading(true);
    };
  }, [pokemonReact.pokemons]);

  const functionsFilters = (event, nameFilter) => {
    switch (nameFilter) {
      case filterType:
        filterType(event, pokemonReact, setPokemonReact, state, renderCards);
        break;
      case filterApiOrDb:
        filterApiOrDb(event, setPokemonReact, state, renderCards);
        break;
      case filterAlphab:
        filterAlphab(event, pokemonReact, setPokemonReact, state, renderCards);
        break;
      case filterPower:
        filterPower(event, pokemonReact, setPokemonReact, state, renderCards);
        break;
      case filterHeight:
        filterHeight(event, pokemonReact, setPokemonReact, state, renderCards);
        break;
      case filterWeight:
        filterWeight(event, pokemonReact, setPokemonReact, state, renderCards);
        break;
      default:
        break;
    }
  };

  const renderCards = useCallback(() => {
    let pokemonRender = pokemonReact.pokemons.slice(page, page + 12);
    return pokemonRender.map((elem) => (
      <Card
        id={elem.id}
        img={elem.img}
        name={elem.name}
        types={elem.types}
        power={elem.atack}
        height={elem.height}
        key={elem.id}
        createInDB={elem.createInDB}
      />
    ));
  }, [pokemonReact.pokemons, page]);

  return (
    <>
      <Nav />
      
      <div className={home.containHome}>
        <img src={thunder} className={home.thunder} alt="" />
        <img src={imgPokemons} className={home.imgPokemons} alt="" />
        <div className={home.containFilters}>
          <div className={home.containDivFilter}>
          
            <img className={home.icono} src={Icono} alt="" />
            
            <div className={home.filters}>
              <label htmlFor="">Filtrar por Peso: </label>
              <select
                name="weight"
                onChange={(event) => functionsFilters(event, filterWeight)}
              >
                <option>-</option>
                <option value="light">Menos Pesados</option>
                <option value="heavy">Max Pesado</option>
              </select>
            </div>
            <div className={home.filters}>
              <label htmlFor="">Filtrar por Typo: </label>
              <select
                name="type"
                onChange={(event) => functionsFilters(event, filterType)}
              >
                <option>-</option>
                {state.types.map((elem) => (
                  <option value={elem} key={elem}>
                    {elem}
                  </option>
                ))}
              </select>
            </div>
            <div className={home.filters}>
              <label htmlFor="">Creados o Existentes: </label>
              <select
                name="apiOrDb"
                onChange={(event) => functionsFilters(event, filterApiOrDb)}
              >
                <option>-</option>
                <option value="api">Existente</option>
                <option value="db">Creados</option>
              </select>
            </div>
          </div>

          {/* filterWeight */}
          <a href="/pokemones" className={home.ver}>Ver Mas</a>
          <div className={home.containDivFilter}>
            <div className={home.filters}>
              <label className="titulo" htmlFor="">
                Order Alfabeticamente:{" "}
              </label>
              <select
                name="Alphab"
                onChange={(event) => functionsFilters(event, filterAlphab)}
              >
                <option>-</option>
                <option value="A-Z">Descendente</option>
                <option value="Z-A">Ascendente</option>
              </select>
            </div>
            <div className={home.filters}>
              <label htmlFor="">Orden de Ataque: </label>
              <select
                name="force"
                onChange={(event) => functionsFilters(event, filterPower)}
              >
                <option>-</option>
                <option value="Up">Descendant</option>
                <option value="Down">Ascendant</option>
              </select>
            </div>
            {/* case filterWeight */}
            <div className={home.filters}>
              <label htmlFor="">Filtrar por Altura: </label>
              <select
                name="height"
                onChange={(event) => functionsFilters(event, filterHeight)}
              >
                <option>-</option>
                <option value="Up">Alto</option>
                <option value="Down">Bajo</option>
              </select>
            </div>
           
          </div>
        </div>
        <ButtonReset
          setPokemonReact={setPokemonReact}
          state={state}
          setPage={setPage}
          renderCards={renderCards}
        />
        <div className={home.containCards}>
          {loading ? (
            <Loading />
          ) : (
            <ButtonPage
              pokemonReact={pokemonReact}
              page={page}
              setPage={setPage}
            />
          )}
          {renderCards()}
          <Footer /> 
        </div>
      </div>
    </>
  );
};

export default Home;
