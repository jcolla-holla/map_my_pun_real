class Route < ApplicationRecord
   validates :activity_type, :name, :city, :user_id, :distance, presence: true
    # allow_nil: false is different than example    
   validates :city, length: { minimum: 2, allow_nil: false}
    
    belongs_to :owner,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id

    has_many :workouts,
          primary_key: :id,
        foreign_key: :route_completed_id,
        class_name: :Workout
end
