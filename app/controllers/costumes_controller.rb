class CostumesController < ApplicationController
    # before_action :found_costume

    def index 
        # byebug
        render json: Costume.all, status: :ok
    end
    def show 
        render json: Costume.find(params[:id]), status: :ok
    end
    # def create
    #     costume = Costume.create!(costume_params)
    #     render json: costume, status: :created
    # end
    # def destroy
    #     @costume.destroy!
    #     head :no_content
    # end

    private

    def found_costume
        @costume = Costume.find(params[:id])
    end

    def costume_params
        params.permit(:name, :price)
    end
end
