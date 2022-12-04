class CustomersController < ApplicationController
    wrap_parameters format: []
    before_action :found_customer

    def index 
        render json: Customer.all, status: :ok
    end
    def show 
        customer = Customer.find_by(id: session[:customer_id])
        if customer
            render json: customer, status: :ok
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end
    def create
        customer = Customer.create!(customer_params)
        render json: customer, status: :created
    end
    def destroy
        @customer.destroy!
        head :no_content
    end

    private

    # def found_customer
    #     @customer = Customer.find(params[:id])
    # end

    def customer_params
        params.permit(:name, :password)
    end
end
