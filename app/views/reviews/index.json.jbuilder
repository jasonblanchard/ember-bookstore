json.array!(@reviews) do |review|
  json.extract! review, :id, :body, :book_id
  json.url book_reviews_url(review, format: :json)
  json.book review.book.id
end
