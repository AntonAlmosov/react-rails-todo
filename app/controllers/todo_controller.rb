class TodoController < ApplicationController

  def index
    @todos = Todo.all
  end

  def new
    @todo = Todo.new(task: params[:task], completed: false)
    @todo.save
  end


  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
  end

  private
  def task_params
    params.require(:todo).permit(:id, :task, :completed)
  end
end
