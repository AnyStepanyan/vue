// src/store/main/actions.js

// Will contain  all actions of this module

let actions = {
    /**
     * Example action fetching Pokemons data and saving it on the state, using a mutation
     */
    getPosts: (context) => {
        return new Promise((resolve, reject) => {
            let data = []
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(posts => {
                    data.push(posts)
                    context.commit("setPostData", data);
                    resolve(data);
                }).catch((err) => {
                reject(err);
            });
        });
        
    },
};

export default actions;