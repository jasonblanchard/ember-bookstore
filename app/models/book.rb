class Book < ActiveRecord::Base
  has_many :reviews
  default_scope order('created_at DESC')
end
