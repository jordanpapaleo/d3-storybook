import React from 'react'
import { storiesOf } from '@storybook/react'
import { Test1, Test2 } from './Test'

storiesOf('D3 Test', module)
  .add('Test 1', () => <Test1 />)
  .add('Test 2', () => <Test2 />)
