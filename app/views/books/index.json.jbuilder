json.set! :books do
  json.array!(@books) do |book|
    json.extract! book, :id, :title, :description, :created_at, :updated_at, :featured
    json.url book_url(book, format: :json)
    json.reviews book.reviews.map(&:id)
  end
end

json.set! :reviews do
  json.array!(Review.all) do |review|
    json.extract! review, :id, :body
    json.book review.book.id
  end
end
