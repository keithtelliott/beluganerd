import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HpConvCalcPage = () => {
  return (
    <>
      <MetaTags title="HpConvCalc" description="HpConvCalc page" />

      <h1>HpConvCalcPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/HpConvCalcPage/HpConvCalcPage.tsx</code>
      </p>
      <p>
        My default route is named <code>hpConvCalc</code>, link to me with `
        <Link to={routes.hpConvCalc()}>HpConvCalc</Link>`
      </p>
    </>
  )
}

export default HpConvCalcPage
