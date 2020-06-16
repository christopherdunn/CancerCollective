class AddHospitalToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :promo_code, :string
    add_column :users, :hospital_id, :integer
  end
end
