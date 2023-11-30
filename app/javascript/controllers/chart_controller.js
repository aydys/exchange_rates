import { Controller } from "@hotwired/stimulus"
import c3 from "c3"

export default class extends Controller {
  static values = { url: String }

  connect() {
    fetch(this.urlValue)
      .then(response => response.json())
      .then((data) => {
        c3.generate({
          bindto: '#chart',
          data: {
            x: 'x',
            columns: data['data']
          },
          axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
          }
        })
      })
  }
}
