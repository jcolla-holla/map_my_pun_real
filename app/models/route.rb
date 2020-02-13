class Route < ApplicationRecord
   validates :activity_type, :name, :city, :user_id, presence: true
    # allow_nil: false is different than example    
   validates :city, length: { minimum: 2, allow_nil: false}
    
    has_one :owner,
        foreign_key: :user_id, 
        class_name: "User"

end
