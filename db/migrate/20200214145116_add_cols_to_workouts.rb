class AddColsToWorkouts < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :user_id, :integer
    add_column :workouts, :route, :json
    add_column :workouts, :completed_date, :date
    add_column :workouts, :start_time, :time
    add_column :workouts, :end_time, :time
  end
end
