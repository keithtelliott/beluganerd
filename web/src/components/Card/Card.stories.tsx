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

import Card from './Card'
import { GiHeatHaze } from 'react-icons/gi'
import { FaSun } from 'react-icons/fa'

const meta: Meta<typeof Card> = {
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
    icon: GiHeatHaze,
    category: 'Home & Building Heating',
    title: 'Natural Gas Furnace vs Heat Pump',
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      et ea rebum.`,
    author: 'Achim Rolle',
    avatarUrl: 'https://avatars0.githubusercontent.com/u/1164541?v=4',
    date: 'Sept. 5, 2023',
  },
}

export const Solar: Story = {
  args: {
    icon: FaSun,
    category: 'Electricity Generation',
    title: 'Home or Building Solar Installation',
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      et ea rebum.`,
    author: 'Keith Elliott',
    avatarUrl: 'https://avatars.githubusercontent.com/u/43206213?s=64&v=4',
    date: 'Sept. 5, 2023',
  },
}
