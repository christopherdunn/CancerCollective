class HospitalSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :zip, :about

  has_many :users
end
