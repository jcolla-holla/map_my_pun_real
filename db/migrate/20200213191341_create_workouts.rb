class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :route_completed_id, null: false
      t.decimal :avg_pace, null: false
      t.timestamps
    end
  end
end
