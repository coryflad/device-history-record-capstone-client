import React from 'react'
import ReactDOM from 'react-dom'
import DhrReport from './DhrReport'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DhrReport />, div)
  ReactDOM.unmountComponentAtNode(div)
})