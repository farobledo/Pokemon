export const filterType = (event, copyState, setCopyState, stateRedux, render) => {
    if (event.target.value !== '-') {
        var aux = [];
        copyState.pokemons.forEach(elem =>
            elem.types.forEach(value => {
                if (value.name.includes(event.target.value)) {
                    aux.push(elem)
                }
            })
        );
        setCopyState({
            ...stateRedux,
            pokemons: aux
        });
    }
    render()
};

export const filterApiOrDb = (event, setCopyState, stateRedux, render) => {
    let aux = [];
    if (event.target.value === 'db') {
        stateRedux.pokemons.forEach(elem => {
            if (elem.createInDB) {
                aux.push(elem)
            }
        });
        setCopyState({
            ...stateRedux,
            pokemons: aux
        });
    }
    if (event.target.value === 'api') {
        stateRedux.pokemons.forEach(elem => {
            if (!elem.createInDB) {
                aux.push(elem)
            }
        });
        setCopyState({
            ...stateRedux,
            pokemons: aux
        });
    }
    render()
}

export const filterAlphab = (event, copyState, setCopyState, stateRedux, render) => {
    let pokemonsReact = [...copyState.pokemons]
    if (event.target.value === 'Z-A') {
        let names = pokemonsReact.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        })
        setCopyState({
            ...stateRedux,
            pokemons: names
        });
    }
    if (event.target.value === 'A-Z') {
        let names = pokemonsReact.sort((a, b) => {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
            return 0;
        })
        setCopyState({
            ...stateRedux,
            pokemons: names
        });
    }
    render()
}

export const filterPower = (event, copyState, setCopyState, stateRedux, render) => {
    let pokemonsReact = [...copyState.pokemons];
    if (event.target.value === 'Down') {
        let powers = pokemonsReact.sort((a, b) => {
            if (a.atack > b.atack) {
                return 1;
            }
            if (a.atack < b.atack) {
                return -1;
            }
            return 0;
        });
        setCopyState({
            ...stateRedux,
            pokemons: powers
        });
    }
    if (event.target.value === 'Up') {
        let powers = pokemonsReact.sort((a, b) => {
            if (a.atack < b.atack) {
                return 1;
            }
            if (a.atack > b.atack) {
                return -1;
            }
            return 0;
        });
        setCopyState({
            ...stateRedux,
            pokemons: powers
        });
    }
    render()
}

export const filterHeight = (event, copyState, setCopyState, stateRedux, render) => {
    let pokemonsReact = [...copyState.pokemons];
    if (event.target.value === 'Down') {
        let height = pokemonsReact.sort((a, b) => {
            if (a.height > b.height) {
                return 1;
            }
            if (a.height < b.height) {
                return -1;
            }
            return 0;
        });
        setCopyState({
            ...stateRedux,
            pokemons: height
        });
    }
    if (event.target.value === 'Up') {
        let height = pokemonsReact.sort((a, b) => {
            if (a.height < b.height) {
                return 1;
            }
            if (a.height > b.height) {
                return -1;
            }
            return 0;
        });
        setCopyState({
            ...stateRedux,
            pokemons: height
        });
    }
    render()
}

export const filterWeight = (event, copyState, setCopyState, stateRedux, render) => {
    let pokemonsReact = [...copyState.pokemons];
    if (event.target.value === 'light') {
        let weight = pokemonsReact.sort((a, b) => {
            if (a.weight > b.weight) {
                return 1;
            }
            if (a.weight < b.weight) {
                return -1;
            }
            return 0;
        });
        setCopyState({
            ...stateRedux,
            pokemons: weight
        });
    }
    if (event.target.value === 'heavy') {
        let weight = pokemonsReact.sort((a, b) => {
            if (a.weight < b.weight) {
                return 1;
            }
            if (a.weight > b.weight) {
                return -1;
            }
            return 0;
        });
        setCopyState({
            ...stateRedux,
            pokemons: weight
        });
    }
    render()
}