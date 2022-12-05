class Customer < ApplicationRecord
    has_secure_password
    
    has_one :cart
    has_many :cart_costumes, through: :cart
    has_many :favorites
    has_many :costumes, through: :favorites

end
