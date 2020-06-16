class AddDisplayToArtworks < ActiveRecord::Migration[5.2]
  def change
    add_column :artworks, :display, :boolean, default: false
    add_column :artworks, :terms, :boolean, default: false
    add_column :artworks, :anonymous, :boolean, default: false
  end
end
