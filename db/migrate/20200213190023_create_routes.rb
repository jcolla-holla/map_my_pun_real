class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :type, null: false
      t.string :name, null: false
      t.string :city, null: false
      t.integer :user_id, null: false  
      t.boolean :users_completed
      t.decimal :distance  
      t.decimal :start_loc_lat
      t.decimal :start_loc_long
      t.decimal :end_loc_lat
      t.decimal :end_loc_long
      t.timestamps
    end
  end
end
 #note: included but didn't make required b/c not sure if I need them: 
# distance
# users_completed

