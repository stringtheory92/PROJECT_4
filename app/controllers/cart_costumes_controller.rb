class CartCostumesController < ApplicationController
    before_action :found_cart_costume

    def index 
        render json: CartCostume.all, status: :ok
    end
    def show 
        render json: @cart_costume, status: :ok
    end
    def create
        cart_costume = CartCostume.create!(cart_costume_params)
        render json: cart_costume, status: :created
    end
    def destroy
        @cart_costume.destroy!
        head :no_content
    end

    private

    def found_cart_costume
        @cart_costume = CartCostume.find(params[:id])
    end

    def cart_costume_params
        params.permit(:cart_id, :costume_id)
    end
end
