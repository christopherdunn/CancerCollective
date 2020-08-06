class Artwork < ApplicationRecord
  mount_uploader :art_photo, ArtPhotoUploader
  validates_presence_of :art_photo
  validates :terms, presence: true
end
