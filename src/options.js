export const options = {
  x_min: {
    section: "Axes",
    type: "string",
    label: "X Axis Min",
    display: "text",
    order: 1,
    display_size: "half"
  },
  x_max: {
    section: "Axes",
    type: "string",
    label: "X Axis Max",
    display: "text",
    order: 2,
    display_size: "half"
  },
  y_min: {
    section: "Axes",
    type: "string",
    label: "Y Axis Min",
    display: "text",
    order: 3,
    display_size: "half"
  },
  y_max: {
    section: "Axes",
    type: "string",
    label: "Y Axis Max",
    display: "text",
    order: 4,
    display_size: "half"
  },
  box_x_min: {
    section: "Box",
    type: "string",
    label: "Box: X Axis Min",
    display: "text",
    order: 1,
    default: "0.0",
    display_size: "half"
  },
  box_x_max: {
    section: "Box",
    type: "string",
    label: "Box: X Axis Max",
    display: "text",
    order: 2,
    default: "1.0",
    display_size: "half"
  },
  box_y_min: {
    section: "Box",
    type: "string",
    label: "Box: Y Axis Min",
    display: "text",
    order: 3,
    default: "0.0",
    display_size: "half"
  },
  box_y_max: {
    section: "Box",
    type: "string",
    label: "Box: Y Axis Max",
    display: "text",
    order: 4,
    default: "1.0",
    display_size: "half"
  },
  crosshair_x: {
    section: "Box",
    type: "string",
    label: "Crosshair: X Axis",
    display: "text",
    order: 5,
    default: "0.5",
    display_size: "half"
  },
  crosshair_y: {
    section: "Box",
    type: "string",
    label: "Crosshair: Y Axis",
    display: "text",
    order: 6,
    default: "0.5",
    display_size: "half"
  },
  crosshair_stroke_width: {
    section: "Box",
    type: "number",
    default: 2,
    min: 0,
    step: 1,
    label: "Crosshair: Stroke Width",
    display_size: "half",
    order: 7,
  },
  point_size: {
    section: "Box",
    type: "number",
    default: 12,
    min: 6,
    step: 1,
    label: "Points: Size",
    display_size: "half",
    order: 8, 
  },
  box_fill: {
    section: "Colors",
    type: "string",
    label: "Box: Hex + Alpha",
    display: "text",
    order: 1,
    default: "#FF000022"
  },
  crosshair_fill: {
    section: "Colors",
    type: "string",
    label: "Crosshair: Hex + Alpha",
    display: "text",
    order: 2,
    default: "#FF000044"
  },
  point_fill: {
    section: "Colors",
    type: "string",
    label: "Point: Hex",
    display: "color",
    order: 3,
    default: "#0000FF"
  },
  label_fill: {
    section: "Colors",
    type: "string",
    label: "Label: Hex",
    display: "color",
    order: 4,
    default: "#0000FF"
  },
  label_dx: {
    section: "Labels",
    type: "number",
    label: "Label: Offset X",
    default_value: 10,
    step: 1,
    order: 1,
    display_size: "half",
  },
  label_dy: {
    section: "Labels",
    type: "number",
    label: "Label: Offset Y",
    default_value: -10,
    step: 1,
    order: 2,
    display_size: "half",
  },
  label_size: {
    section: "Labels",
    type: "number",
    label: "Label: Font Size",
    default_value: 10,
    min: 0,
    step: 1,
    order: 3,
    display_size: "half",
  },
  margin: {
    section: "Misc",
    type: "number",
    label: "Chart Margin",
    default_value: 50,
    min: 0,
    step: 5
  }
}