class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body
  has_one :book
end
