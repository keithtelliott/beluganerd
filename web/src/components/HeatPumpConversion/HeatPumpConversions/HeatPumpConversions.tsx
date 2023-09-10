import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/HeatPumpConversion/HeatPumpConversionsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteHeatPumpConversionMutationVariables,
  FindHeatPumpConversions,
} from 'types/graphql'

const DELETE_HEAT_PUMP_CONVERSION_MUTATION = gql`
  mutation DeleteHeatPumpConversionMutation($id: Int!) {
    deleteHeatPumpConversion(id: $id) {
      id
    }
  }
`

const HeatPumpConversionsList = ({
  heatPumpConversions,
}: FindHeatPumpConversions) => {
  const [deleteHeatPumpConversion] = useMutation(
    DELETE_HEAT_PUMP_CONVERSION_MUTATION,
    {
      onCompleted: () => {
        toast.success('HeatPumpConversion deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Author name</th>
            <th>Author user id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Commentary</th>
            <th>Electricity usage total pre hp annual kw hr</th>
            <th>Electricity cost total pre hp annual dollars</th>
            <th>Gas usage total pre hp annual therms</th>
            <th>Gas cost total pre hp annual dollars</th>
            <th>Gas usage water heater annual therms</th>
            <th>Gas usage other annual therms</th>
            <th>Furnace efficiency percent</th>
            <th>Heat pump cop</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {heatPumpConversions.map((heatPumpConversion) => (
            <tr key={heatPumpConversion.id}>
              <td>{truncate(heatPumpConversion.id)}</td>
              <td>{truncate(heatPumpConversion.authorName)}</td>
              <td>{truncate(heatPumpConversion.authorUserId)}</td>
              <td>{truncate(heatPumpConversion.title)}</td>
              <td>{truncate(heatPumpConversion.description)}</td>
              <td>{truncate(heatPumpConversion.commentary)}</td>
              <td>
                {truncate(
                  heatPumpConversion.electricityUsageTotalPreHPAnnualKwHr
                )}
              </td>
              <td>
                {truncate(
                  heatPumpConversion.electricityCostTotalPreHPAnnualDollars
                )}
              </td>
              <td>
                {truncate(heatPumpConversion.gasUsageTotalPreHPAnnualTherms)}
              </td>
              <td>
                {truncate(heatPumpConversion.gasCostTotalPreHPAnnualDollars)}
              </td>
              <td>
                {truncate(heatPumpConversion.gasUsageWaterHeaterAnnualTherms)}
              </td>
              <td>{truncate(heatPumpConversion.gasUsageOtherAnnualTherms)}</td>
              <td>{truncate(heatPumpConversion.furnaceEfficiencyPercent)}</td>
              <td>{truncate(heatPumpConversion.heatPumpCOP)}</td>
              <td>{timeTag(heatPumpConversion.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.heatPumpConversion({
                      id: heatPumpConversion.id,
                    })}
                    title={
                      'Show heatPumpConversion ' +
                      heatPumpConversion.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editHeatPumpConversion({
                      id: heatPumpConversion.id,
                    })}
                    title={'Edit heatPumpConversion ' + heatPumpConversion.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete heatPumpConversion ' + heatPumpConversion.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(heatPumpConversion.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HeatPumpConversionsList
