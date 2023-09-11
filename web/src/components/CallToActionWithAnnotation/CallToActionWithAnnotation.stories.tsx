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

import CallToActionWithAnnotation from './CallToActionWithAnnotation'

const meta: Meta<typeof CallToActionWithAnnotation> = {
  component: CallToActionWithAnnotation,
}

export default meta

type Story = StoryObj<typeof CallToActionWithAnnotation>

export const Primary: Story = {
  args: {
    headerRow1: 'Helping You Quantify ',
    headerRow2: 'Energy Transition Decisions',
    blurb:
      'Pondering an energy efficiency upgrade? ' +
      'Maybe a heat pump?  Wondering if solar is right for you? ' +
      'The BelugaPod community creates and shares calculators that describe the cost & benefits of energy transition decisions.',
    buttonText: 'Browse BelugaPod Calculators',
    subButtonText: 'Learn More',
    arrowNote: "Let's do the math!",
  },
}
