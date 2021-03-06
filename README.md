# [>>>Try it here!<<<](https://mapmypun.herokuapp.com/#/)

![](app/assets/images/mapmypun_white_background.png)

*MapMyPun* is a clone of [MapMyRun](www.mapmyrun.com).  A user can create an account (or log in with a instant-login demo account) in order to: (1) create new Routes by clicking on a Google Map, (2) 'complete' a Route by creating a Workout, and (3) view their own and other users' activity in a Feed, with cards ordered by most recently updated card.


## Technologies Used:
* JavaScript (Node.js 12.5.0) 
* React 16.12.0 
* Redux 7.2.0
* Ruby 2.5.1
* Rails 5.2.4
* PostgreSQL 12
* Webpack 4.41.6
* Heroku - for hosting
* Google Maps APIs:
    * Maps Static API (to generate static map images)
    * Maps JavaScript API
    * Distance Matrix API
    * Directions API
* [Free Joke API - icanhazdadjoke.com](https://icanhazdadjoke.com/)


## Route Creation (below)
Using several Google Maps APIs to generate a responsive map, and real-time distance updates per click.  And render a new joke (usually a pun!) for each click also using the Free Joke API.

![Create Route](app/assets/gifs/create_route_2020-02-21_11-07-23_2020-02-21_11_14_20.gif)



## Feed (below)
Merge Routes and Workouts into a single feed, ordered by last updated date.

![Create Route](app/assets/gifs/feed.gif.gifcask.2020-02-21_11_05_13.gif)
