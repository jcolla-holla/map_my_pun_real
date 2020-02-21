class UpdateWorkoutDurationType < ActiveRecord::Migration[5.2]
  def change
      change_column :workouts, :duration, :string
  end
end
