class CurrencyRate < ApplicationRecord
  enum char_code: { usd: 'usd', eur: 'eur', cny: 'cny' }

  def self.set_rates(rates, day)
    rates.each do |rate|
      create(
        char_code: rate.css('CharCode').text.downcase,
        name:  rate.css('Name').text,
        value: BigDecimal(rate.css('Value').text.gsub(',', '.')),
        release_date: day
      )
    end
  end
end
