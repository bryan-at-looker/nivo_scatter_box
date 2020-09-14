import React from "react";
// import "./styles.css";
import { area, curveMonotoneX, line } from "d3-shape";
import { ScatterPlot } from "@nivo/scatterplot";
import { localeFormatPercent } from "./utils";
import { CustomNode } from "./CustomNode";
import { CustomTooltip } from "./CustomTooltip";


export const App = ({
    measureX, 
    measureY, 
    labels, 
    box, 
    rendered, 
    names, 
    box_outline, 
    box_fill, 
    point_fill,
    crosshair,
    crosshair_fill,
    crosshair_stroke_width,
    point_size,
    height,
    width,
    label_config,
    field_labels,
    margin
  }) => {

  const data = labels.map((row,i)=>{
    return {
      x: measureX[i], 
      y: measureY[i], 
      label: labels[i],
      renderedX: rendered[i].measureX,
      renderedY: rendered[i].measureY,
    }
  })

  const BoxLayer = ({ points, xScale, yScale }) => {
    const areaGenerator = area()
      .x(d =>  xScale(d.x))
      .y0(d => yScale(d.y0))
      .y1(d => yScale(d.y1))
    return <path  d={areaGenerator(box_outline)} fill={box_fill || "rgba(255, 0, 0, .25)"} />;
  };

  

  const CrosshairLayerX = ({ points, xScale, yScale }) => {
    const lineGenerator = line()
      .x(d =>  xScale(crosshair.x))
      .y(d => yScale(d[1]))
    return <path d={lineGenerator(box)} strokeWidth={crosshair_stroke_width} stroke={crosshair_fill || "rgba(255, 0, 0, .25)"}/>;
  };

  const CrosshairLayerY = ({ points, xScale, yScale }) => {
    const lineGenerator = line()
      .x(d =>  xScale(d[0]))
      .y(d => yScale(crosshair.y))
    return <path d={lineGenerator(box)} strokeWidth={crosshair_stroke_width} stroke={crosshair_fill || "rgba(255, 0, 0, .25)"} />;
  };
  if (data.length) {
    return (
      <ScatterPlot
        width={width}
        height={height}
        data={[{id: 'a', data}]}
        animate={false}
        yScale={{
          type: "linear",
          min: box[0][1],
          max: box[1][1]
        }}
        axisLeft={localeFormatPercent}
        axisBottom={localeFormatPercent}
        xScale={{
          type: "linear",
          min: box[0][0],
          max: box[1][0]
        }}
        margin={{
          top: margin,
          right: margin,
          bottom: margin,
          left: margin
        }}
        colors={point_fill}
        symbolSize={point_size}
        renderNode={(props)=><CustomNode key={`${props.node.index}`} {...{...props, label_config}} />}
        tooltip={(props)=><CustomTooltip {...{...props, field_labels}} />}
        // enableGridX={false}
        layers={[
          "grid",
          "axes",
          BoxLayer,
          "nodes",
          "markers",
          "mesh",
          "legends",
          CrosshairLayerX,
          CrosshairLayerY
        ]}
      />
    )
  } else {
    return <></>
  }
  
}
