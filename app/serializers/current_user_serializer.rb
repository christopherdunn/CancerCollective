class CurrentUserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :hospital_id, :role
end
