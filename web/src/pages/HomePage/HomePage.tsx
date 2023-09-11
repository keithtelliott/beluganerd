import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CallToActionWithAnnotation from 'src/components/CallToActionWithAnnotation/CallToActionWithAnnotation'
import CardPageSection from 'src/components/CardPageSection/CardPageSection'
import SimpleThreeColumns from 'src/components/SimpleThreeColumns/SimpleThreeColumns'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <CallToActionWithAnnotation
        headerRow1="Helping You Quantify"
        headerRow2="Energy Transition Decisions"
        blurb={`Pondering an energy efficiency upgrade?  Maybe a heat pump?  Wondering if solar is right for you? The BelugaPod community creates and shares calculators that describe the cost & benefits of energy transition decisions.`}
        buttonText="Browse BelugaPod Calculators"
        subButtonText="Learn More"
        arrowNote={"Let's do the math!"}
      />

      <SimpleThreeColumns />

      <CardPageSection />
    </>
  )
}

export default HomePage
