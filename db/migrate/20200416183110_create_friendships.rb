class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :starter_user_id, null: false
      t.integer :receiver_user_id, null: false
      t.boolean :accepted_by_receiver
      t.timestamps
    end
  end
end
