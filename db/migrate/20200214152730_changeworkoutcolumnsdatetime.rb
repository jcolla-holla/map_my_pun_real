class Changeworkoutcolumnsdatetime < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :completed_date
    remove_column :workouts, :start_time
    remove_column :workouts, :end_time
    add_column :workouts, :start_time_real, :datetime, null: false
    add_column :workouts, :end_time_real, :datetime, null: false
  end
end
