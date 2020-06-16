class AddArtistStatementToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :artist_statement, :text
  end
end
