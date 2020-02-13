# better to return an object with ids rather than an array - IMPROVEMENT OPPORTUNITY

json.array! (@routes) do |route|
    json.extract! route, :name, :activity_type, :city, :user_id, :users_completed, :distance, :start_loc_lat, :start_loc_long, :end_loc_lat, :end_loc_lat
end 
