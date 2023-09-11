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

import FormNumberSlider from './FormNumberSlider'

const meta: Meta<typeof FormNumberSlider> = {
  component: FormNumberSlider,
}

export default meta

type Story = StoryObj<typeof FormNumberSlider>

export const Primary: Story = {
  args: {
    descriptiveName: 'Annual Electricity Usage (kw-hr / year)',
    formItemName: 'electricityUsageTotalPreHPAnnualKwHr',
    formItemValue: 5000,
    handleOnChange: (e) => {},
    maxValue: 20000,
    minValue: 100,
  },
}
