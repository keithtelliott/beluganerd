import type { FindHeatPumpConversions } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import HeatPumpConversions from 'src/components/HeatPumpConversion/HeatPumpConversions'

export const QUERY = gql`
  query FindHeatPumpConversions {
    heatPumpConversions {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No heatPumpConversions yet. '}
      <Link to={routes.newHeatPumpConversion()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  heatPumpConversions,
}: CellSuccessProps<FindHeatPumpConversions>) => {
  return <HeatPumpConversions heatPumpConversions={heatPumpConversions} />
}
