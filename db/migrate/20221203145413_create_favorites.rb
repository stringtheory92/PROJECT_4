class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.integer :customer_id
      t.integer :costume_id

      t.timestamps
    end
  end
end