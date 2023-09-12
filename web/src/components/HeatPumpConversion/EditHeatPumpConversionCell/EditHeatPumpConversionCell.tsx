import type {
  EditHeatPumpConversionById,
  UpdateHeatPumpConversionInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import HeatPumpConversionForm from 'src/components/HeatPumpConversion/HeatPumpConversionForm'

export const QUERY = gql`
  query EditHeatPumpConversionById($id: Int!) {
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
const UPDATE_HEAT_PUMP_CONVERSION_MUTATION = gql`
  mutation UpdateHeatPumpConversionMutation(
    $id: Int!
    $input: UpdateHeatPumpConversionInput!
  ) {
    updateHeatPumpConversion(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  heatPumpConversion,
}: CellSuccessProps<EditHeatPumpConversionById>) => {
  const [updateHeatPumpConversion, { loading, error }] = useMutation(
    UPDATE_HEAT_PUMP_CONVERSION_MUTATION,
    {
      onCompleted: () => {
        toast.success('HeatPumpConversion updated')
        navigate(routes.heatPumpConversions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateHeatPumpConversionInput,
    id: EditHeatPumpConversionById['heatPumpConversion']['id']
  ) => {
    updateHeatPumpConversion({ variables: { id, input } })
  }

  return (
    // <div className="rw-segment">
    //   <header className="rw-segment-header">
    //     <h2 className="rw-heading rw-heading-secondary">
    //       Edit HeatPumpConversion {heatPumpConversion?.id}
    //     </h2>
    //   </header>
      // <div className="rw-segment-main">
        <HeatPumpConversionForm
          heatPumpConversion={heatPumpConversion}
          onSave={onSave}
          error={error}
          loading={loading}
        />
    //   </div>
    // </div>
  )
}
