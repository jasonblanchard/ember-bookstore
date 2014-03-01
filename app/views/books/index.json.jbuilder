json.key_format! camelize: :lower

json.set! :books do
  json.array!(@books) do |book|
    json.extract! book, :id, :title, :description, :created_at, :updated_at, :featured
    json.url book_url(book, format: :json)
    json.reviews book.reviews.map(&:id)
    json.authors  book.authors.map(&:id)
  end
end

json.set! :reviews do
  json.array!(@reviews) do |review|
    json.extract! review, :id, :body, :created_at
    json.book review.book.id
  end
end

json.set! :authors do
  json.array!(@authors) do |author|
    json.extract! author, :first_name, :last_name, :id
    json.books author.books.map(&:id)
  end
end
