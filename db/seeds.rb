# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'date';

User.destroy_all
Workout.destroy_all
Route.destroy_all

# CURRENTLY HAS MY KEY IN THIS FILE THIS IS A PROBLEM FIGURE OUT HOW TO HIDE
# will this work?: ENV['google_api_key']
# stored via figaro gem already: https://open.appacademy.io/learn/swe-in-person-nyc/react/google-maps-api-key


demo_user = User.create!(email: "demo_user@fake.com", password: "password", first_name:"Demo", last_name:"User", country:"United States", gender:"Female")
user_1 = User.create!(email: "jesse@fake.com", password: "password", first_name:"Jesse", last_name:"Colligan", country:"United States", gender:"Male")
user_2 = User.create!(email: "wonder@fake.com", password: "password", first_name:"Wonder", last_name:"Woman", country:"United States", gender:"Female")



# verified works
r1 = Route.create!(
        distance: 5.8,
        name: "downhill fun",
        activity_type: "swim",
        city: "Seattle",
        owner: user_2,
        maps_api_static_img: "https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap&markers=size:mid%7Ccolor:red%|40.73595686396483,-73.95510240173341|40.71032772401275,-73.94119783020021|40.71858279938749,-73.93305588348389|40.72899047137957,-73.94380123809815|40.7196886918097,-73.95856411651611|40.71051573421715,-73.95026109527589|&key=AIzaSyBrpStMcZ1UILzkqi_eMI2pjTgo7SZmUl8"
)

# verified works
r2 = Route.create!(
        distance: 6.2,
        name: "around the world",
        activity_type: "boat",
        city: "world",
        owner: user_1,
        maps_api_static_img: "https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap&markers=size:mid%7Ccolor:red%|40.74480117938022,-73.97762200092596|40.73569671923887,-73.9796819374494|40.74681556134285,-73.98691205032351|40.7451694559253,-73.9940436164856|40.74911578897213,-73.99107294448852|&key=AIzaSyBrpStMcZ1UILzkqi_eMI2pjTgo7SZmUl8"
)
# Route.create!(distance: 6.2,name: "around the world",activity_type: "boat",city: "world",user_id: 1)

# verified works
w2 = Workout.create!(
        route: r2,
        avg_pace: 5.17,
        owner: user_2,
        completed_date: Date.new(2016,2,3),
        name: "felt the burn",
        notes: "this was a really hard workout!",
        duration: Time.new(2016, 2, 3, 1, 2, 1)
)
# COPY PAST IN CONSOLE
# Workout.create!(route_completed_id: 49,avg_pace: 5.17,user_id: 2,completed_date: Date.new(2016,2,3),name: "felt the burn",notes: "this was a really hard workout!",duration: Time.new(2016, 2, 3, 1, 2, 1))

w1 = Workout.create!(
        route: r1,
        avg_pace: 9.21,
        owner: demo_user,
        completed_date: Date.new(2017,8,20),
        name: "brutal bike",
        notes: "biked all the way up bear mountain",
        duration: Time.new(2016, 2, 3, 1, 2, 1)
)
# W1 -- FOR TESTING IN RAILS CONSOLE COPY/PASTE
# Workout.create!(route_completed_id: 1,avg_pace: 9.21,user_id: 77,completed_date: Date.new(2017,8,20),name: "brutal bike", notes: "biked all the way up bear mountain",duration: Time.new(2016, 2, 3, 1, 2, 1))


# verified works
w3 = Workout.create!(
        route: r1,
        avg_pace: 18.2,
        owner: user_2,
        completed_date: Date.new(2018,9,20),
        name: "tough run",
        notes: "ran around the world",
        duration: Time.new(2016, 2, 3, 1, 2, 1)
)
# Workout.create!( route_completed_id: 50,avg_pace: 18.2,user_id: 3,completed_date: Date.new(2018,9,20),name: "tough run",notes: "ran around the world",duration: Time.new(2016, 2, 3, 1, 2, 1))


