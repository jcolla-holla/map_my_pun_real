# improvement opportunity -- make an object instead of an array

@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :first_name, :last_name
    end
end

# @routes.each do |route|
#     json.set! route.id do
#         json.extract! route, :id, :user_id, :created_at, :updated_at, :activity_type, :name, :city,  :users_completed, :distance
#     end
# end