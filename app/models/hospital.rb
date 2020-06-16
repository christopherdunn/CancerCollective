class Hospital < ApplicationRecord
  has_many :users
  validates_presence_of :name
  validates_presence_of :city
  validates_presence_of :state 
end
