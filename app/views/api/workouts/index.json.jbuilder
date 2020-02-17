# better to return an object with ids rather than an array - IMPROVEMENT OPPORTUNITY
json.array! (@workouts) do |workout|
    json.extract! workout, :id, :user_id, :created_at, :updated_at, :route, :route_completed_id, :avg_pace, :name, :notes, :duration
end
