class Cart < ApplicationRecord
    has_many :cart_costumes
    has_many :costumes, through: :cart_costumes
    belongs_to :customer
end
