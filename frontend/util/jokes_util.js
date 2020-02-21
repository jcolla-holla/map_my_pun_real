export const getRandomDadJoke = () => {
    return $.ajax ({
        headers: {
            Accept: "application/json"
        }, 
        method: "GET",
        url: "https://icanhazdadjoke.com/"
    })
}

export const getJokeTest = () => {
    return getRandomDadJoke().then((response) => {
        let foo = response.joke
        return foo;
    });
} 