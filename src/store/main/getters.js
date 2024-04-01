// src/store/main/getters.js

// Will contain getters to obtain the current values from the state variables in this module

let getters = {
    /**
     * Gets pokemon from state
    //  */
    // POKEMONS: (state) => {
    //     return state.pokemons;
    // },
    /**
     * Gets message from state
     */
    posts: (state) => {
        return state.posts;
    },
};

export default getters;