class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :password
  has_one :cart
  has_many :favorites


  # def cart_contents
  #   byebug
  #   customer_obj = self.attributes

  #   costumesArray = self.costumes.select('costume.id, costume.name, costume.price, count(cart_costumes.id) as count')
  #   .group('costumes.id').map do |costume| 
  #       {id: costume.id, name: costume.name, price: costume.price, count: costume.count} 
  #   end
  #   # binding.pry
  #   customer_obj[:cart_contents] = costumesArray
  #   customer_obj
  # end

end
