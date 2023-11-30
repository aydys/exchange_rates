class DashboardController < ApplicationController
  def chart; end

  def currencies
    rates = CurrencyRate.where(release_date: 1.month.ago.to_date..Date.today).order(:release_date)
    dates = rates.map(&:release_date).uniq.map(&:to_s).unshift('x')
    usd_data = rates.select{|r| r.char_code == 'usd'}.map{|r| r.value.round(2).to_s }.unshift('USD/RUB')
    eur_data = rates.select{|r| r.char_code == 'eur'}.map{|r| r.value.round(2).to_s }.unshift('EUR/RUB')
    cny_data = rates.select{|r| r.char_code == 'cny'}.map{|r| r.value.round(2).to_s }.unshift('CNY/RUB')

    render json: { data: [dates, usd_data, eur_data, cny_data ] }.to_json
  end

  def table
    usd_rates = CurrencyRate.where(char_code: 'usd', release_date: 1.month.ago.to_date..Date.today).order(:release_date)
    eur_rates = CurrencyRate.where(char_code: 'eur', release_date: 1.month.ago.to_date..Date.today).order(:release_date)
    cny_rates = CurrencyRate.where(char_code: 'cny', release_date: 1.month.ago.to_date..Date.today).order(:release_date)

    @usd = generate_row('usd', usd_rates)
    @eur = generate_row('eur', eur_rates)
    @cny = generate_row('cny', cny_rates)
  end

  private

    def generate_row(currency, rates)
      result = [currency]
      result.push(count_change(rates, 4))
      result.push(count_change(rates, 3))
      result.push(count_change(rates, 2))
      result.push(count_change(rates, 1))
    end

    def count_change(rates, week_count)
      rate_begin_week = rates.find_by(release_date: week_count.weeks.ago.to_date)
      rate_end_week = rates.find_by(release_date: rate_begin_week.release_date.end_of_week )
      dynamic_change = (rate_end_week.value * 100) / rate_begin_week.value - 100
      sign = (dynamic_change > 0) ? '+' : ''
      "#{rate_end_week.value.to_s}(#{sign}#{dynamic_change.round(2)}%)"
    end
end
