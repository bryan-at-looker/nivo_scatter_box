import React from 'react'
export const CustomNode = ({
    node,
    x,
    y,
    size,
    color,
    blendMode,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onClick,
    label_config
}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle
        r={size / 2}
        fill={color} // color
        style={{ mixBlendMode: blendMode }}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
      <text fontSize={label_config.label_size} dx={label_config.label_dx} dy={label_config.label_dy}>{node.data.label}</text>
    </g>
  )
}