import { render } from '@redwoodjs/testing/web'

import CalculatorNatGasToHeatPump from './CalculatorNatGasToHeatPump'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CalculatorNatGasToHeatPump', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CalculatorNatGasToHeatPump />)
    }).not.toThrow()
  })
})
