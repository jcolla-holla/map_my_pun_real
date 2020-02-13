class Workout < ApplicationRecord
    validates :route_completed_id, :avg_pace, presence: true

    has_one :route,
        foreign_key: :route_completed_id,
        class_name: "Workout"
end
 