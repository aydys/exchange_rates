# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "c3" # @0.7.20
pin "d3" # @5.16.0
pin "d3-array" # @1.2.4
pin "d3-axis" # @1.0.12
pin "d3-brush" # @1.1.6
pin "d3-chord" # @1.0.6
pin "d3-collection" # @1.0.7
pin "d3-color" # @1.4.1
pin "d3-contour" # @1.3.2
pin "d3-dispatch" # @1.0.6
pin "d3-drag" # @1.2.5
pin "d3-dsv" # @1.2.0
pin "d3-ease" # @1.0.7
pin "d3-fetch" # @1.2.0
pin "d3-force" # @1.2.1
pin "d3-format" # @1.4.5
pin "d3-geo" # @1.12.1
pin "d3-hierarchy" # @1.1.9
pin "d3-interpolate" # @1.4.0
pin "d3-path" # @1.0.9
pin "d3-polygon" # @1.0.6
pin "d3-quadtree" # @1.0.7
pin "d3-random" # @1.1.2
pin "d3-scale" # @2.2.2
pin "d3-scale-chromatic" # @1.5.0
pin "d3-selection" # @1.4.2
pin "d3-shape" # @1.3.7
pin "d3-time" # @1.1.0
pin "d3-time-format" # @2.3.0
pin "d3-timer" # @1.0.10
pin "d3-transition" # @1.3.2
pin "d3-voronoi" # @1.1.4
pin "d3-zoom" # @1.8.3
