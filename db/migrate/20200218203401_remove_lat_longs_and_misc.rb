class RemoveLatLongsAndMisc < ActiveRecord::Migration[5.2]
  def change
        remove_column :routes, :users_completed
        remove_column :routes, :start_loc_lat
        remove_column :routes, :start_loc_long
        remove_column :routes, :end_loc_lat
        remove_column :routes, :end_loc_long
        add_column :routes, :maps_api_static_img, :string, null: false
  end
end
