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
        users_completed: true
)

# verified works
r2 = Route.create!(
        distance: 6.2,
        name: "around the world",
        activity_type: "boat",
        city: "world",
        owner: user_1,
)
# Route.create!(distance: 6.2,name: "around the world",activity_type: "boat",city: "world",user_id: 1,users_completed: true)

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


