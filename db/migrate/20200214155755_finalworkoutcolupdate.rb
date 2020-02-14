class Finalworkoutcolupdate < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :start_time_real
    remove_column :workouts, :end_time_real
    add_column :workouts, :completed_date, :date, null: false
    add_column :workouts, :name, :string, null: false
    add_column :workouts, :notes, :text, null: false
    add_column :workouts, :duration, :time, null: false
    change_column_null :routes, :distance, false
  end
end
