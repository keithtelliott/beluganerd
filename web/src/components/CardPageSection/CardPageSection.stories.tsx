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

import CardPageSection from './CardPageSection'

const meta: Meta<typeof CardPageSection> = {
  component: CardPageSection,
}

export default meta

type Story = StoryObj<typeof CardPageSection>

export const Primary: Story = {}
