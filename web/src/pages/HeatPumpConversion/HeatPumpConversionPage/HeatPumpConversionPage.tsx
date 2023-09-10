import HeatPumpConversionCell from 'src/components/HeatPumpConversion/HeatPumpConversionCell'

type HeatPumpConversionPageProps = {
  id: number
}

const HeatPumpConversionPage = ({ id }: HeatPumpConversionPageProps) => {
  return <HeatPumpConversionCell id={id} />
}

export default HeatPumpConversionPage
