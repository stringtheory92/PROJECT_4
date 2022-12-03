class CartsController < ApplicationController
    before_action :found_cart

    # def index 
    #     render json: Favorites.all, status: :ok
    # end
    def show 
        render json: @cart, status: :ok
    end
    def create
        cart = Cart.create!(cart_params)
        render json: cart, status: :created
    end
    def destroy
        @cart.destroy!
        head :no_content
    end

    private

    def found_cart
        @cart = Cart.find(params[:id])
    end

    def cart_params
        params.permit(:customer_id)
    end
end
