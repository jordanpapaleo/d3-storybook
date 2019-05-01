import React, { useRef, useEffect } from 'react'
import { select } from 'd3-selection'

type Props = {
  x: number,
  y: number,
  render: Function
}

const D3blackbox = ({ x, y, render }: Props) => {
  const refAnchor = useRef(null)

  useEffect(() => {
    render(select(refAnchor.current))
  })

  return <g className="d3-black-box" ref={refAnchor} transform={`translate(${x}, ${y})`} />
}

export default D3blackbox
