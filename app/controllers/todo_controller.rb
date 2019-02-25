class TodoController < ApplicationController

  def index
    @tasks = Todo.all
  end
end
