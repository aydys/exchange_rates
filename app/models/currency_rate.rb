class CurrencyRate < ApplicationRecord
  enum char_code: { usd: 'usd', eur: 'eur', cny: 'cny' }
end
