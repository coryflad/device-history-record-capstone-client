import React from 'react'
import ReactDOM from 'react-dom'
import DefectLog from './DefectLog'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DefectLog />, div)
  ReactDOM.unmountComponentAtNode(div)
})