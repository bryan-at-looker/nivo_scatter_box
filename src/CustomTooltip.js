import React from 'react'
import { SpaceVertical, Box, Divider, Text, Paragraph } from '@looker/components'

export const CustomTooltip = ({node, field_labels}) => {
  const {data} = node
  return (
    <SpaceVertical around gap="xxxsmall">
      <Box p="xxsmall" bg="#80808033">
        <Text 
          fontSize="xsmall"
          fontWeight="bold"
        >{data.label}
        </Text>
        <Divider m="xxxsmall"/>
        <Section label={field_labels.measureX} value={data.renderedX} />
        <Section label={field_labels.measureY} value={data.renderedY} />
      </Box>
    </SpaceVertical>
  )
}

const Section = ({label,value}) => {
  return (
  <Paragraph fontSize="xxsmall">
    <Text 
      fontWeight="semiBold"
      fontSize="xxsmall"
    >{label}: </Text>{value}
  </Paragraph>
  )
}