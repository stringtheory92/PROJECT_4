class CostumeSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :costume_image
  include Rails.application.routes.url_helpers
  
  def costume_image
    rails_blob_url(object.costume_image, only_path: true) if object.costume_image.attached?
    # Use representation to use with variants 
    # rails_representation_url(object.costume_image, only_path: true) if object.costume_image.attached?
  end
  
end
