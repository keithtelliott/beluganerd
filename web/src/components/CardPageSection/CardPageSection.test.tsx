import { render } from '@redwoodjs/testing/web'

import CardPageSection from './CardPageSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CardPageSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardPageSection />)
    }).not.toThrow()
  })
})
