class ChangeCategorytoActivityType < ActiveRecord::Migration[5.2]
  def change
      rename_column :routes, :category, :activity_type
  end
end
