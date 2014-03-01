class AuthorsController < ApplicationController
  before_action :set_author, only: [:show]

  def index
    @book = Book.find(params[:book_id])
    @authors = @book.authors
  end


end
