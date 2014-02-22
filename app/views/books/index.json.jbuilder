json.set! :books do
  json.array!(@books) do |book|
    json.extract! book, :id, :title, :description, :created_at, :updated_at, :featured
    json.url book_url(book, format: :json)
  end
end
