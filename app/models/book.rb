class Book < ActiveRecord::Base
  has_many :reviews, :dependent => :destroy
  default_scope order('created_at DESC')
end
