import React from 'react'
import './styles.css'

import D3blackbox from 'stories/D3blackbox'
import recaman from './recaman'
import dashes from './animated-dashes'

const Test1 = () => (
  <div className="test">
    <svg width="400" height="400">
      <D3blackbox x={0} y={0} render={svg => recaman(svg, 400, 400)} />
    </svg>
  </div>
)

const Test2 = () => (
  <div className="test">
    <svg width="800" height="600">
      <D3blackbox x={0} y={0} render={svg => dashes(svg, 300, 200)} />
    </svg>
  </div>
)

export { Test1, Test2 }
