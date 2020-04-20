class Comment < ApplicationRecord
    validates :commntable_id, :commntable_type, :user_id, :content, presence: true

    belongs_to :commntable, polymorphic: true
    
    # don't think this is necessary
    # belongs_to :commenter, class_name: :User
end