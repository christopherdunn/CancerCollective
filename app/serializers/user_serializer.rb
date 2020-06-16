class UserSerializer < ActiveModel::Serializer
  attributes :id, :hospital_id, :role, :first_name, :last_name

  has_many :artworks
end
