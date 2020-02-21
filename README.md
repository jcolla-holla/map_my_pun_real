# README

*MapMyPun* is a clone of (MapMyRun)[www.mapmyrun.com].  A user can create an account (or log in with a instant-login demo account) in order to: (1) create new Routes by clicking on a Google Map, (2) 'complete' a Route by creating a Workout, and (3) view their own and other users' activity in a Feed, with cards ordered by most recently updated card.

*Live link:* https://mapmypun.herokuapp.com/#/

*Technologies Used:*
* Javascript 
* React
* Redux
* Ruby
* Rails
* PostgreSQL
* Google Maps APIs:
    * Maps Static API (to generate static map images)
    * Maps JavaScript API
    * Distance Matrix API
    * Directions API
    * ![Free Joke API - icanhazdadjoke.com](https://icanhazdadjoke.com/)
    

*Route Creation* - using several Google Maps APIs to generate a responsive map, and real-time distance updates per click.  And render a new joke (usually a pun!) for each click also using the Free Joke API.

![Create Route](app/assets/gifs/create_route_2020-02-21 11-07-23.2020-02-21 11_14_20.gif)


*Feed* - Merge Routes and Workouts into a single feed, ordered by last updated date.

![Feed](app/assets/gifs/feed.gif.gifcask.2020-02-21 11_05_13.gif)


* *Possible Future Improvements*
    * Likes
    * Comments
    * Friends
    * Other ideas? - message me on Github!