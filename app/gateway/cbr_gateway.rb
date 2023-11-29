class CbrGateway
  def get_rates(day)
    date_string = day.strftime('%d/%m/%Y')
    url =
      "http://www.cbr.ru/scripts/XML_daily.asp?date_req=#{date_string}"

    response = URI.open(url).read
    raw = parse_doc(response)
    CurrencyRate.set_rates(raw, day)
  end

  private

    def parse_doc(doc)
      xml_doc = Nokogiri::XML(doc)
      xml_doc.css('Valute').select do |node|
        ['USD', 'EUR', 'CNY'].include? node.css('CharCode').text
      end
    end
end
