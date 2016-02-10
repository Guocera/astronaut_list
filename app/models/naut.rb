require 'carrierwave/orm/activerecord'

class Naut < ActiveRecord::Base
  has_many :degrees

  mount_uploader :image, NautUploader
end