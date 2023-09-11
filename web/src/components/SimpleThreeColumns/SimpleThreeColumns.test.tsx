import { render } from '@redwoodjs/testing/web'

import SimpleThreeColumns from './SimpleThreeColumns'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SimpleThreeColumns', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SimpleThreeColumns />)
    }).not.toThrow()
  })
})
