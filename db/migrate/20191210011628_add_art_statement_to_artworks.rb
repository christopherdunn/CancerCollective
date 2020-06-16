class AddArtStatementToArtworks < ActiveRecord::Migration[5.2]
  def change
    add_column :artworks, :art_statement, :text
  end
end
