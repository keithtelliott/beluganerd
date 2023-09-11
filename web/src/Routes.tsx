// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import BelugaNerdLayout from './layouts/BelugaNerdLayout/BelugaNerdLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={BelugaNerdLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/hp-conv-calc" page={HpConvCalcPage} name="hpConvCalc" />
      </Set>
      {/* <Set wrap={ScaffoldLayout} title="HeatPumpConversions" titleTo="heatPumpConversions" buttonLabel="New HeatPumpConversion" buttonTo="newHeatPumpConversion"> */}
      <Set wrap={BelugaNerdLayout} >
        <Route path="/heat-pump-conversions/new" page={HeatPumpConversionNewHeatPumpConversionPage} name="newHeatPumpConversion" />
        <Route path="/heat-pump-conversions/{id:Int}/edit" page={HeatPumpConversionEditHeatPumpConversionPage} name="editHeatPumpConversion" />
        <Route path="/heat-pump-conversions/{id:Int}" page={HeatPumpConversionHeatPumpConversionPage} name="heatPumpConversion" />
        <Route path="/heat-pump-conversions" page={HeatPumpConversionHeatPumpConversionsPage} name="heatPumpConversions" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
