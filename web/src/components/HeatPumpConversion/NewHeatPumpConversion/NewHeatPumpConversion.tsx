import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import HeatPumpConversionForm from 'src/components/HeatPumpConversion/HeatPumpConversionForm'

import type { CreateHeatPumpConversionInput } from 'types/graphql'

const CREATE_HEAT_PUMP_CONVERSION_MUTATION = gql`
  mutation CreateHeatPumpConversionMutation(
    $input: CreateHeatPumpConversionInput!
  ) {
    createHeatPumpConversion(input: $input) {
      id
    }
  }
`

const NewHeatPumpConversion = () => {
  const [createHeatPumpConversion, { loading, error }] = useMutation(
    CREATE_HEAT_PUMP_CONVERSION_MUTATION,
    {
      onCompleted: () => {
        toast.success('HeatPumpConversion created')
        navigate(routes.heatPumpConversions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateHeatPumpConversionInput) => {
    createHeatPumpConversion({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New HeatPumpConversion
        </h2>
      </header>
      <div className="rw-segment-main">
        <HeatPumpConversionForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewHeatPumpConversion
