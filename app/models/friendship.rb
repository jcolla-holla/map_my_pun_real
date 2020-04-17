class Friendship < ApplicationRecord
    validates :starter_user_id, :receiver_user_id, presence: true

# having trouble seeding w these validations not sure why
    # belongs_to :owner,
    #     primary_key: :id,
    #     foreign_key: :starter_user_id,
    #     class_name: :User

    # not sure if it's necessary to also have an association for receiver_user_id

end
