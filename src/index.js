import { App } from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { getBounds, handleOverride } from './utils';
import { options } from './options'
import { ComponentsProvider } from '@looker/components'

looker.plugins.visualizations.add({
  options,
  // Set up the initial state of the visualization
  create: function(element, config) {

    // Insert a <style> tag with some styles we'll use later.
    element.innerHTML = `
      <style>
        .hello-world-vis {
          /* Vertical centering */
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
      </style>
    `;

    // Create a container element to let us center the text.
    let container = element.appendChild(document.createElement("div"));
    container.className = "hello-world-vis";

    // Create an element to contain the text.
    this._textElement = container.appendChild(document.createElement("div"));

    // Render to the target element
    this.chart = ReactDOM.render(
      <></>,
      this._textElement
    );

  },
  // Render in response to the data or settings changing
  updateAsync: function(data, element, config, queryResponse, details, done) {
    // Clear any errors from previous updates
    this.clearErrors();

    // Throw some errors and exit if the shape of the data isn't what this chart needs
    if (queryResponse.fields.measure_like.length < 2) {
      this.addError({title: "Missing Measures", message: "This chart requires two measures."});
      return;
    }


    if (queryResponse.fields.dimension_like.length < 1) {
      this.addError({title: "Missing Dimensions", message: "This chart requires one dimension."});
      return;
    }

    const {x_min, x_max, y_min, y_max, box_x_min, box_x_max, box_y_min, box_y_max, box_fill, point_fill, crosshair_fill, crosshair_stroke_width, point_size, margin, x_label, y_label } = config
    const box_outline = [
      {
        x: handleOverride(box_x_min) || 0, 
        y0: handleOverride(box_y_min) || 0,
        y1: handleOverride(box_y_max) || 0
      },{
        x: handleOverride(box_x_max) || 0, 
        y0: handleOverride(box_y_min) || 0,
        y1: handleOverride(box_y_max) || 0
      }
    ]
    const crosshair = {
      x: config.crosshair_x,
      y: config.crosshair_y
    }
    const label_config = {
      label_fill: config.label_fill,
      label_dx: config.label_dx,
      label_dy: config.label_dy,
      label_size: config.label_size
    }
    const names = {
      measureX: queryResponse.fields.measure_like[0].name, 
      measureY: queryResponse.fields.measure_like[1].name, 
      labels: queryResponse.fields.dimension_like[0].name
    }
    const measureX = data.map(row=>row[names.measureX].value);
    const measureY = data.map(row=>row[names.measureY].value);
    const labels = data.map(row=>row[names.labels].value);
    const field_labels = {
      dimension: queryResponse.fields.dimension_like[0].label_short || queryResponse.fields.dimension_like[0].label,
      measureX: queryResponse.fields.measure_like[0].label_short || queryResponse.fields.measure_like[0].label,
      measureY: queryResponse.fields.measure_like[1].label_short || queryResponse.fields.measure_like[1].label,
    }
    const rendered = data.map(row=>{ 
      return {
        measureX: row[names.measureX].rendered || row[names.measureX].value || row[names.measureX].rendered,
        measureY: row[names.measureY].rendered || row[names.measureY].value || row[names.measureY].rendered,
        label: row[names.labels].rendered || row[names.labels].value || row[names.labels].rendered
      } 
    })

    const box = [
      [ 
        getBounds(measureX, 'min', x_min),
        getBounds(measureY, 'min', y_min),
      ],
      [
        getBounds(measureX, 'max', x_max),
        getBounds(measureY, 'max', y_max),
      ]
    ]

    const axis_labels = {
      x: x_label || queryResponse.fields.measure_like[0].label_short || queryResponse.fields.measure_like[0].label || '',
      y: y_label || queryResponse.fields.measure_like[1].label_short || queryResponse.fields.measure_like[1].label || '',
    }

    // Finally update the state with our new data
    this.chart = ReactDOM.render(
      <ComponentsProvider>
      <App 
        // {...{data, element, config, queryResponse, details, done}}
        {...{measureX, measureY, labels, box, rendered, names, box_outline, box_fill, point_fill, crosshair, crosshair_fill, crosshair_stroke_width, point_size, label_config, field_labels, margin, axis_labels}}
        height={element.offsetHeight}
        width={element.offsetWidth}
      />
      </ComponentsProvider>,
      this._textElement
    );

    // We are done rendering! Let Looker know.
    done()
  }
});

