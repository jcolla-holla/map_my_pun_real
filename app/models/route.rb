class Route < ApplicationRecord
   validates :activity_type, :name, :city, :user_id, :distance, :maps_api_static_img, presence: true
    # allow_nil: false is different than example    
   validates :city, length: { minimum: 2, allow_nil: false}
    
    belongs_to :owner,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id

    has_many :workouts,
          primary_key: :id,
        foreign_key: :route_completed_id,
        class_name: :Workout,
        dependent: :destroy

    has_many :likes, as: :likeable

    has_many :comments, as: :commntable
end
