export const getBounds = (arr, type, override) => {
  const val = handleOverride(override)
  if (val !== undefined) {
    return val
  } else if (type === 'min') {
    return Math.min(...arr)
  } else if (type === 'max')  {
    return Math.max(...arr)
  } else {
    return undefined
  }
}

export const handleOverride = (str) => {
  const val = parseFloat(str)
  if (isNaN(val)) {
    return undefined
  } else {
    return parseFloat(str)
  }
}

export const localeFormatPercent = {
  format: o=>o.toLocaleString('en-US', {
    style: 'percent',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }) 
}