import EditHeatPumpConversionCell from 'src/components/HeatPumpConversion/EditHeatPumpConversionCell'

type HeatPumpConversionPageProps = {
  id: number
}

const EditHeatPumpConversionPage = ({ id }: HeatPumpConversionPageProps) => {
  return <EditHeatPumpConversionCell id={id} />
}

export default EditHeatPumpConversionPage
