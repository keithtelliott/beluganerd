import type { FindHeatPumpConversionById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import HeatPumpConversion from 'src/components/HeatPumpConversion/HeatPumpConversion'

export const QUERY = gql`
  query FindHeatPumpConversionById($id: Int!) {
    heatPumpConversion: heatPumpConversion(id: $id) {
      id
      authorName
      authorUserId
      title
      description
      commentary
      electricityUsageTotalPreHPAnnualKwHr
      electricityCostTotalPreHPAnnualDollars
      gasUsageTotalPreHPAnnualTherms
      gasCostTotalPreHPAnnualDollars
      gasUsageWaterHeaterAnnualTherms
      gasUsageOtherAnnualTherms
      furnaceEfficiencyPercent
      heatPumpCOP
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>HeatPumpConversion not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  heatPumpConversion,
}: CellSuccessProps<FindHeatPumpConversionById>) => {
  return <HeatPumpConversion heatPumpConversion={heatPumpConversion} />
}
