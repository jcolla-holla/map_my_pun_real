class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else  
            render json: @like.errors.full_messages, status: 400
        end

    end

    def show
        @like = Like.find(params[:id])
        render :show
    end

    def index
        @likes = Like.all
        render :index
    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy
        render :index
    end

    def update 
        @like = Like.find(params[:id])
        if @like.update(like_params)
            render :show
        else
            render json: @like.errors.full_messages, status: 400
        end
    end

    private
    def like_params
        params.require(:like).permit(:likeable_id, :likeable_type, :user_id)
    end

end
