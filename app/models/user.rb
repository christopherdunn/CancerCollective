class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :artworks

  validates_presence_of :promo_code


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
