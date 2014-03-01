class Book < ActiveRecord::Base
  has_many :reviews, :dependent => :destroy
  has_and_belongs_to_many :authors

  default_scope { order('created_at DESC') }
end
