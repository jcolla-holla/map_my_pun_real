export const getRandomDadJoke = () => {
    return $.ajax ({
        headers: {
            Accept: "application/json"
        }, 
        method: "GET",
        url: "https://icanhazdadjoke.com/"
        // success: (response) => {
        //     debugger
        //     response.joke
        // }
    })
}


export const getJokeTest = () => {
    // let apiResponse = getRandomDadJoke();
    // debugger
    // return apiResponse.responseJSON.joke

    return getRandomDadJoke().then((response) => {
        let foo = response.joke
        return foo;
    });
} 