class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.date :birthday #doesn't need to be required
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.integer :facebook_id
      t.string :gender
      t.string :location #how to make auto fill with cities?
      t.string :country
      t.boolean :subscribed
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
  end
end
