class CreateCurrencyRates < ActiveRecord::Migration[7.1]
  def change
    create_table :currency_rates do |t|
      t.string :char_code
      t.string :name
      t.decimal :value
      t.date :release_date

      t.timestamps
    end
  end
end
