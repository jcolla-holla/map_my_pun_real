# better to return an object with ids rather than an array - IMPROVEMENT OPPORTUNITY
json.array! (@likes) do |like|
    json.extract! like, :id, :likeable_id, :likeable_type, :user_id
end