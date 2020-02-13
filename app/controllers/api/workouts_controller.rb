class Api::WorkoutsController < ApplicationController
    # need before_action logged_in?
    
    def create
        @workout = Workout.new(workout_params)
        if @workout.save
            render :show
        else  
            render json: @workout.errors.full_messages, status: 400
        end
    end

    def show
        @workout = Workout.find(params[:id])
        render :show
    end

    def index
        @workouts = Workout.all
        render :index
    end

    def destroy
        @workout = Workout.find(params[:id])
        @workout.destroy
        render :index
    end

    def update 
        @workout = Workout.find(params[:id])
        if @workout.update(workout_params)
            render :show
        else
            render json: @workout.errors.full_messages, status: 400
        end
        render :show
    end

    private
    def workout_params
        params.require(:workout).permit(route_completed_id, avg_page)
    end
end
