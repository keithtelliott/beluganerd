import { render } from '@redwoodjs/testing/web'

import HpConvCalcPage from './HpConvCalcPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HpConvCalcPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HpConvCalcPage />)
    }).not.toThrow()
  })
})
