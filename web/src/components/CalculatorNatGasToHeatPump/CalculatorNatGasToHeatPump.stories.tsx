// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import CalculatorNatGasToHeatPump from './CalculatorNatGasToHeatPump'

const meta: Meta<typeof CalculatorNatGasToHeatPump> = {
  component: CalculatorNatGasToHeatPump,
}

export default meta

type Story = StoryObj<typeof CalculatorNatGasToHeatPump>

export const Primary: Story = {}
