class AddRolesToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :artist, :boolean, default: true
    add_column :users, :role, :string, default: :artist
  end
end
