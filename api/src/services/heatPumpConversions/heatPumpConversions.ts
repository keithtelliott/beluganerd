import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const heatPumpConversions: QueryResolvers['heatPumpConversions'] =
  () => {
    return db.heatPumpConversion.findMany()
  }

export const heatPumpConversion: QueryResolvers['heatPumpConversion'] = ({
  id,
}) => {
  return db.heatPumpConversion.findUnique({
    where: { id },
  })
}

export const createHeatPumpConversion: MutationResolvers['createHeatPumpConversion'] =
  ({ input }) => {
    return db.heatPumpConversion.create({
      data: input,
    })
  }

export const updateHeatPumpConversion: MutationResolvers['updateHeatPumpConversion'] =
  ({ id, input }) => {
    return db.heatPumpConversion.update({
      data: input,
      where: { id },
    })
  }

export const deleteHeatPumpConversion: MutationResolvers['deleteHeatPumpConversion'] =
  ({ id }) => {
    return db.heatPumpConversion.delete({
      where: { id },
    })
  }
