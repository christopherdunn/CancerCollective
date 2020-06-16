class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :first_name
      t.string :last_name
      t.string :art_photo
      t.string :title
      t.string :hospital_name
      t.string :city
      t.string :state


      t.timestamps
    end
  end
end
