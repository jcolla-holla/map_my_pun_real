# better to return an object with ids rather than an array - IMPROVEMENT OPPORTUNITY

# AS AN ARRAY:
json.array! (@routes) do |route|
    json.extract! route, :id, :user_id, :created_at, :updated_at, :activity_type, :name, :city, :distance, :maps_api_static_img
end

# AS AN OBJECT:
# @routes.each do |route|
#     json.set! route.id do
#         json.extract! route, :id, :user_id, :created_at, :updated_at, :activity_type, :name, :city,  :users_completed, :distance
#     end
# end