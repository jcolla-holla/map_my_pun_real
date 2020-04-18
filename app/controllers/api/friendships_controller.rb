class Api::FriendshipsController < ApplicationController

    def create
        @friendship = Friendship.new(friendship_params)
        if @friendship.save
            render :show
        else  
            render json: @friendship.errors.full_messages, status: 400
        end

    end

    def show
        @friendship = Friendship.find(params[:id])
        render :show
    end

    def index
        @friendships = Friendship.all
        render :index
    end

    def destroy
        @friendship = Friendship.find(params[:id])
        @friendship.destroy
        render :index
    end

    def update 
        @friendship = Friendship.find(params[:id])
        if @friendship.update(friendship_params)
            render :show
        else
            render json: @friendship.errors.full_messages, status: 400
        end
    end

    private
    def friendship_params
        params.require(:friendship).permit(:starter_user_id, :receiver_user_id, :accepted_by_receiver)
    end

end
