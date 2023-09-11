import { render } from '@redwoodjs/testing/web'

import BelugaNerdLayout from './BelugaNerdLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BelugaNerdLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BelugaNerdLayout />)
    }).not.toThrow()
  })
})
