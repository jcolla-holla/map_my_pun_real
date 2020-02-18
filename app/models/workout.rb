class Workout < ApplicationRecord
    validates :route_completed_id, :avg_pace, :user_id, :completed_date, :name, :notes, :duration, presence: true

    belongs_to :route,
        class_name: :Route,
         primary_key: :id,
        foreign_key: :route_completed_id

    belongs_to :owner,
    class_name: :User,
        primary_key: :id,
        foreign_key: :user_id
end
 