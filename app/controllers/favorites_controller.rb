class FavoritesController < ApplicationController
    before_action :found_favorite

    def index 
        render json: Favorite.all, status: :ok
    end
    def show 
        render json: @favorite, status: :ok
    end
    def create
        favorite = Favorite.create!(favorites_params)
        render json: favorite, status: :created
    end
    def destroy
        @favorite.destroy!
        head :no_content
    end

    private

    def found_favorite
        @favorite = Favorite.find(params[:id])
    end

    def favorites_params
        params.permit(:customer_id, :costume_id)
    end
end
