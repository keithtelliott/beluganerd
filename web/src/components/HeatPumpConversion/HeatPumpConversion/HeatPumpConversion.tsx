import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteHeatPumpConversionMutationVariables,
  FindHeatPumpConversionById,
} from 'types/graphql'

const DELETE_HEAT_PUMP_CONVERSION_MUTATION = gql`
  mutation DeleteHeatPumpConversionMutation($id: Int!) {
    deleteHeatPumpConversion(id: $id) {
      id
    }
  }
`

interface Props {
  heatPumpConversion: NonNullable<
    FindHeatPumpConversionById['heatPumpConversion']
  >
}

const HeatPumpConversion = ({ heatPumpConversion }: Props) => {
  const [deleteHeatPumpConversion] = useMutation(
    DELETE_HEAT_PUMP_CONVERSION_MUTATION,
    {
      onCompleted: () => {
        toast.success('HeatPumpConversion deleted')
        navigate(routes.heatPumpConversions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteHeatPumpConversionMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete heatPumpConversion ' + id + '?')
    ) {
      deleteHeatPumpConversion({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            HeatPumpConversion {heatPumpConversion.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{heatPumpConversion.id}</td>
            </tr>
            <tr>
              <th>Author name</th>
              <td>{heatPumpConversion.authorName}</td>
            </tr>
            <tr>
              <th>Author user id</th>
              <td>{heatPumpConversion.authorUserId}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{heatPumpConversion.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{heatPumpConversion.description}</td>
            </tr>
            <tr>
              <th>Commentary</th>
              <td>{heatPumpConversion.commentary}</td>
            </tr>
            <tr>
              <th>Electricity usage total pre hp annual kw hr</th>
              <td>{heatPumpConversion.electricityUsageTotalPreHPAnnualKwHr}</td>
            </tr>
            <tr>
              <th>Electricity cost total pre hp annual dollars</th>
              <td>
                {heatPumpConversion.electricityCostTotalPreHPAnnualDollars}
              </td>
            </tr>
            <tr>
              <th>Gas usage total pre hp annual therms</th>
              <td>{heatPumpConversion.gasUsageTotalPreHPAnnualTherms}</td>
            </tr>
            <tr>
              <th>Gas cost total pre hp annual dollars</th>
              <td>{heatPumpConversion.gasCostTotalPreHPAnnualDollars}</td>
            </tr>
            <tr>
              <th>Gas usage water heater annual therms</th>
              <td>{heatPumpConversion.gasUsageWaterHeaterAnnualTherms}</td>
            </tr>
            <tr>
              <th>Gas usage other annual therms</th>
              <td>{heatPumpConversion.gasUsageOtherAnnualTherms}</td>
            </tr>
            <tr>
              <th>Furnace efficiency percent</th>
              <td>{heatPumpConversion.furnaceEfficiencyPercent}</td>
            </tr>
            <tr>
              <th>Heat pump cop</th>
              <td>{heatPumpConversion.heatPumpCOP}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(heatPumpConversion.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editHeatPumpConversion({ id: heatPumpConversion.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(heatPumpConversion.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default HeatPumpConversion
