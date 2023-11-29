class GetRatesJob < ApplicationJob
  queue_as :default

  retry_on OpenURI::HTTPError

  def perform(day)
    CbrGateway.new.get_rates(day)
  end
end
