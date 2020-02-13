class ChangeTypeColumnNameRoutes < ActiveRecord::Migration[5.2]
  def change
    rename_column :routes, :type, :category
  end
end
