import { render } from '@redwoodjs/testing/web'

import FormNumberSlider from './FormNumberSlider'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FormNumberSlider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormNumberSlider />)
    }).not.toThrow()
  })
})
