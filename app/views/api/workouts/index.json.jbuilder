# better to return an object with ids rather than an array - IMPROVEMENT OPPORTUNITY
json.array! (@workouts) do |workout|
    json.extract! workout, :route_completed_id, :avg_pace
end
