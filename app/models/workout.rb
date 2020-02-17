class Workout < ApplicationRecord
    validates :route_completed_id, :avg_pace, :user_id, :completed_date, :name, :notes, :duration, presence: true

    has_one :route,
        foreign_key: :route_completed_id,
        class_name: "Workout"

    has_one :owner,
        foreign_key: :user_id,
        class_name: "User"
end
 