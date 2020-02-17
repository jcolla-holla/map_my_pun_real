# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'date';

User.delete_all
Workout.delete_all
Route.delete_all

demo_user = User.create!(email: "demo_user@fake.com", password: "password", first_name:"Demo", last_name:"User", country:"United States", gender:"Female")

r1 = Route.create(
        distance: 5.8,
        name: "downhill fun",
        activity_type: "swim",
        city: "Seattle",
        user_id: 3,
        users_completed: true, 
        start_loc_lat: 47.532210,
        start_loc_long: -122.361680,
        end_loc_lat: 46.630268,
        end_loc_long: -115.810867
)


w1 = Workout.create(
        route_completed_id: 3,
        avg_pace: 9.21,
        user_id: 1,
        completed_date: Date.new(2017,8,20),
        name: "brutal bike",
        notes: "biked all the way up bear mountain",
        duration: Time.new(2016, 2, 3, 1, 2, 1),
)

w2 = Workout.create(
        route_completed_id: 2,
        avg_pace: 5.17,
        user_id: 1,
        completed_date: Date.new(2016,2,3),
        name: "felt the burn",
        notes: "this was a really hard workout!",
        duration: Time.new(2016, 2, 3, 1, 2, 1),
)

