# better to return an object with ids rather than an array - IMPROVEMENT OPPORTUNITY
json.array! (@comments) do |comment|
    json.extract! comment, :commntable_id, :commntable_type, :user_id, :content
end