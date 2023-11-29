require 'rails_helper'

RSpec.describe CbrGateway do
  let(:gateway) do
    date = Date.parse('26-11-2023')
    CbrGateway.new.get_rates(date)
  end

  describe '#get_rates', vcr: true do
    it 'creates new currency rate from cbr api' do
      expect{ gateway }.to change { CurrencyRate.count }.by 3
    end
  end
end
