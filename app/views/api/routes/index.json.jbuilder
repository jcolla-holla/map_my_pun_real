# better to return an object with ids rather than an array - IMPROVEMENT OPPORTUNITY

json.array! (@routes) do |route|
    json.extract! route, :id, :user_id, :created_at, :activity_type, :name, :city,  :users_completed, :distance
end
