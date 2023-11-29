class AddIndexToCurrencyRates < ActiveRecord::Migration[7.1]
  def change
    add_index :currency_rates, [:char_code, :release_date], unique: true
  end
end
