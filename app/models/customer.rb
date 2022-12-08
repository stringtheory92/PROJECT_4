class Customer < ApplicationRecord
    has_secure_password
    
    has_one :cart
    has_many :cart_costumes, through: :cart
    has_many :favorites
    has_many :costumes, through: :favorites

    def cart_contents
        customer_obj = self.attributes
        costumesArray = self.cart.costumes.select(:id, :name, :price, self.cart_costumes.count(:id)).group('costumes.id').map do |costume|
            {id: costume.id, name: costume.name, price: costume.price, count: costume.cart_costumes.where(cart_id: self.cart.id).count} 
        end
        # customer_obj[:cart_contents] = costumesArray
        # customer_obj
        costumesArray
    end

end
