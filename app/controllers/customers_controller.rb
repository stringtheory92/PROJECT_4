class CustomersController < ApplicationController
    wrap_parameters format: []
    # before_action :found_customer

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
        if customer.valid?
            cart = Cart.create!(customer_id: customer.id)
            if cart.valid?
            render json: customer, status: :created
            end
        else 
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        customer = Customer.find(params[:id])
        # byebug
        customer.update!(customer_params)
        render json: customer, status: :accepted
    end

    def destroy
        @customer.destroy!
        head :no_content
    end

    def first
        render json: Customer.first, status: :ok
    end

    private

    # def found_customer
    #     @customer = Customer.find(params[:id])
    # end

    def customer_params
        params.permit(:id, :name, :password, :password_confirmation)
    end
end