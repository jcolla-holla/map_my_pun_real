class Api::RoutesController < ApplicationController

    def create
        @route = Route.new(route_params)
        if @route.save
            render :show
        else  
            render json: @route.errors.full_messages, status: 400
        end

    end

    def show
        @route = Route.find(params[:id])
        render :show
    end

    def index
        @routes = Route.all
        render :index
    end

    def destroy
        @route = Route.find(params[:id])
        @route.destroy
        render :index
    end

    def update 
        @route = Route.find(params[:id])
        if @route.update(route_params)
            render :show
        else
            render json: @route.errors.full_messages, status: 400
        end
        render :show
    end

    private
    def route_params
        params.require(:route).permit(:activity_type, :name, :city, :user_id, :users_completed, :distance, :maps_api_static_img)
    end
end
