import React from "react";
import cardDetail from "./cardDetail.module.css";
import ButtonModify from "./buttonModify";
//  import { modifyPoke } from '../redux/actions';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePoke } from "../redux/actions";
import Foto from "../icono/valor (1).gif";




const CardDetail = ({ state }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // let modify = (state) => {
  //     dispatch(modifyPoke(state.name))
  //     navigate('/home')
  // };

  const handleClick = () => {
    navigate("/home");
    window.location.reload(true);
  };

  //    se elimina el pokemon
  const BorarPokemon = () => {
    dispatch(deletePoke(state.name));
    alert("Estas seguro que quieres eliminar este pokemon?");
    navigate("/home");
    window.location.reload(true);
  };

  // const updatePokemon = () => {
  //   dispatch(modifyPoke(state.name));
  //   alert("Estas seguro que quieres modificar este pokemon?");
  //   navigate("/create");
  //   window.location.reload(true);
  // };

  return (
    <div className={cardDetail.containDetails}>
      <div className={cardDetail.containStatsGeneral}>
      <img src={Foto} alt="" />
        <div className={cardDetail.containName}>
        <h1>{state.name ? state.name : state}</h1>
        </div>
        <div className={cardDetail.containStats}>
          <h2>Statistics:</h2>
          <div className={cardDetail.containDetail}>
            <div className={cardDetail.containStatistics}>
              <div className={cardDetail.detail}>
                <div>
                  <h5>Life:</h5>
                  <p>{state.life}</p>
                </div>
                <div>
                  <h5>Atack:</h5>
                  <p>{state.atack}</p>
                </div>
                <div>
                  <h5>Defense:</h5>
                  <p>{state.defense}</p>
                </div>
              </div>
              <div className={cardDetail.detail}>
                <div>
                  <h5>Speed:</h5>
                  <p>{state.speed}</p>
                </div>
                <div>
                  <h5>Height:</h5>
                  <p>{state.height}</p>
                </div>
                <div>
                  <h5>Weight:</h5>
                  <p>{state.weight}</p>
                </div>
              </div>
            </div>
            <div className={cardDetail.containTypes}>
              <h5>Types: </h5>
              <div className={cardDetail.types}>
                {!state.types
                  ? ""
                  : state.types.map((type) => (
                      <p key={type.name}>{type.name}</p>
                    ))}
              </div>
            </div>
            <div className={cardDetail.id}>
              <h5>Id:</h5>
              <p>{state.id}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={cardDetail.containImg}>
        <img src={state.img} height={50} width={50} alt="img not found" />
      </div>
      <div className={cardDetail.salir}>
        <button className={cardDetail.salir2} onClick={handleClick}>
          Salir Home
        </button>
      </div>

      {state.createInDB ? (
        <div onClick={BorarPokemon}>
          <ButtonModify />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardDetail;
