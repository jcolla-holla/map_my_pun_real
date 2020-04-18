json.array! (@friendships) do |friendship|
    json.extract! friendship, :id, :starter_user_id, :receiver_user_id, :accepted_by_receiver
end