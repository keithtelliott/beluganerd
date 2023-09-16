import { render } from '@redwoodjs/testing/web'

import Card from './Card'
import { GiHeatHaze } from 'react-icons/gi'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Card', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Card
          icon={GiHeatHaze}
          category="Home & Building Heating"
          title="Natural Gas Furnace vs Heat Pump"
          description={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum.`}
          author="Achim Rolle"
          avatarUrl="https://avatars0.githubusercontent.com/u/1164541?v=4"
          date="Sept. 5, 2023"
          hrefToAnalysis="/calculator/natural-gas-to-heat-pump"
        />
      )
    }).not.toThrow()
  })
})
