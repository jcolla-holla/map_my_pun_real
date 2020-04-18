class Comment < ApplicationRecord
    validates :commetable_id, :commetable_type, :user_id, :content, presence: true

    belongs_to :commetable, polymorphic: true

    belongs_to :commenter, class_name: :User
end
