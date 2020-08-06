class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :art_photo, :title, :hospital_name, :user_id, :city, :state, :views, :category, :art_statement, :anonymous, :display


end
