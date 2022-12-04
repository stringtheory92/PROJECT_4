class SessionsController < ApplicationController
    def create
        customer = Customer.find_by(name: params[:name])
        if params[:password] == user.password
            session[:customer_id] = customer.id
            render json: customer, status: :created
        else 
            render json: {error: "Invalid User Name or Password"}, status: :unauthorized

        end
    end
    def destroy
        session.delete :customer_id
        head :no_content
    end
end
