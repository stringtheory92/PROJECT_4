class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record_response

    private

    def render_not_found_response(exception)
        render json: {"error": "#{exception.model} not found"}, status: :not_found
    end

    def render_invalid_record_response(invalid)
        render json: invalid.response.errors.full_messages, status: :unprocessable_entity
    end


end
