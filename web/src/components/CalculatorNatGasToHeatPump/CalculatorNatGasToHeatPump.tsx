import { useState } from "react"
import FormNumberSlider from "../FormNumberSlider/FormNumberSlider"

const CalculatorNatGasToHeatPump = () => {
  const [
    electricityUsageTotalPreHPAnnualKwHr,
    setElectricityUsageTotalPreHPAnnualKwHr,
  ] = useState(5950)
  const [
    electricityCostTotalPreHPAnnualDollars,
    setElectricityCostTotalPreHPAnnualDollars,
  ] = useState(956)
  const [gasUsageTotalPreHPAnnualTherms, setGasUsageTotalPreHPAnnualTherms] =
    useState(966)
  const [gasCostTotalPreHPAnnualDollars, setGasCostTotalPreHPAnnualDollars] =
    useState(1416)
  const [gasUsageWaterHeaterAnnualTherms, setGasUsageWaterHeaterAnnualTherms] =
    useState(100)
  const [gasUsageOtherAnnualTherms, setGasUsageOtherAnnualTherms] = useState(80)
  const [furnaceEfficiencyPercent, setFurnaceEfficiencyPercent] = useState(80)
  const [heatPumpCOP, setHeatPumpCOP] = useState(2.7)
  const [
    electricityCostFurnaceBlowerAnnualDollars,
    setElectricityCostFurnaceBlowerAnnualDollars,
  ] = useState(150)

  const electricityCostPerKwHr =
    electricityCostTotalPreHPAnnualDollars /
    electricityUsageTotalPreHPAnnualKwHr
  const naturalGasCostPerTherm =
    gasCostTotalPreHPAnnualDollars / gasUsageTotalPreHPAnnualTherms
  const naturalGasUsageHomeHeatingPreHPAnnualTherms =
    gasUsageTotalPreHPAnnualTherms -
    gasUsageWaterHeaterAnnualTherms -
    gasUsageOtherAnnualTherms
  const naturalGasUsageAppliedHomeHeatingPreHPAnnualTherms =
    naturalGasUsageHomeHeatingPreHPAnnualTherms *
    (furnaceEfficiencyPercent / 100)
  const bTUPerTherm = 100000
  const heatDeliveredToHomeAnnualBTU =
    naturalGasUsageAppliedHomeHeatingPreHPAnnualTherms * bTUPerTherm
  const kwHrPerTherm = 29.3
  const heatDeliveredToHomeAnnualKwHr =
    naturalGasUsageAppliedHomeHeatingPreHPAnnualTherms * kwHrPerTherm
  const electricityUsageHomeHeatingPostHPAnnualKwHr =
    heatDeliveredToHomeAnnualKwHr / heatPumpCOP
  const electricityCostHomeHeatingPostHPAnnualDollars =
    electricityUsageHomeHeatingPostHPAnnualKwHr * electricityCostPerKwHr
  const electricityCostTotalPostHPAnnualDollars =
    electricityCostTotalPreHPAnnualDollars -
    electricityCostFurnaceBlowerAnnualDollars +
    electricityCostHomeHeatingPostHPAnnualDollars
  const naturalGasUsageTotalPostHPAnnualTherms =
    gasUsageTotalPreHPAnnualTherms - naturalGasUsageHomeHeatingPreHPAnnualTherms
  const naturalGasCostTotalPostHPAnnualDollars =
    naturalGasUsageTotalPostHPAnnualTherms * naturalGasCostPerTherm

  return (
    <div>
      <h2>{'CalculatorNatGasToHeatPump'}</h2>
      <p>
        {
          'Find me in ./web/src/components/CalculatorNatGasToHeatPump/CalculatorNatGasToHeatPump.tsx'
        }
      </p>
      <FormNumberSlider               descriptiveName="Annual Electricity Usage (kw-hr / year)"
              formItemName="electricityUsageTotalPreHPAnnualKwHr"
              formItemValue={electricityUsageTotalPreHPAnnualKwHr}
              handleOnChange={setElectricityUsageTotalPreHPAnnualKwHr}
              maxValue={20000}
              minValue={100}
/>
    </div>
  )
}

export default CalculatorNatGasToHeatPump
