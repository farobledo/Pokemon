import React from 'react';
import buttonReset from './buttonReset.module.css';
import pokeButton from '../images/close-pokeball.png';

const ButtonReset = ({setPokemonReact, state, setPage, renderCards}) => {

    const reset = () => {
        setPokemonReact({...state})
        renderCards()
        setPage(0)
    }

    return (
        <div className={buttonReset.containButton}>
            <button onClick={reset}>
                Restablecer
                <img className={buttonReset.poke1} src={pokeButton} alt="Img not found" />
                <img className={buttonReset.poke2} src={pokeButton} alt="Img not found" />
            </button>
        </div>
    )
};

export default ButtonReset;