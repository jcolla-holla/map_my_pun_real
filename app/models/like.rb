class Like < ApplicationRecord
    validates :likeable_id, :likeable_type, :user_id, presence: true

    belongs_to :likeable, polymorphic: true

    # don't think this is necessary
    # belongs_to :liker, class_name: :User
end
