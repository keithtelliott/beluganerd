import type { HeatPumpConversion } from '@prisma/client'

import {
  heatPumpConversions,
  heatPumpConversion,
  createHeatPumpConversion,
  updateHeatPumpConversion,
  deleteHeatPumpConversion,
} from './heatPumpConversions'
import type { StandardScenario } from './heatPumpConversions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('heatPumpConversions', () => {
  scenario(
    'returns all heatPumpConversions',
    async (scenario: StandardScenario) => {
      const result = await heatPumpConversions()

      expect(result.length).toEqual(
        Object.keys(scenario.heatPumpConversion).length
      )
    }
  )

  scenario(
    'returns a single heatPumpConversion',
    async (scenario: StandardScenario) => {
      const result = await heatPumpConversion({
        id: scenario.heatPumpConversion.one.id,
      })

      expect(result).toEqual(scenario.heatPumpConversion.one)
    }
  )

  scenario('creates a heatPumpConversion', async () => {
    const result = await createHeatPumpConversion({
      input: {
        authorName: 'String',
        authorUserId: 'String',
        title: 'String',
        electricityUsageTotalPreHPAnnualKwHr: 977718.7200678927,
        electricityCostTotalPreHPAnnualDollars: 2751395.947748578,
        gasUsageTotalPreHPAnnualTherms: 9021387.751642887,
        gasCostTotalPreHPAnnualDollars: 4326671.024973701,
        gasUsageWaterHeaterAnnualTherms: 7132663.906311782,
        gasUsageOtherAnnualTherms: 8064528.913355921,
        furnaceEfficiencyPercent: 4444036.652517893,
        heatPumpCOP: 24512.869238595413,
      },
    })

    expect(result.authorName).toEqual('String')
    expect(result.authorUserId).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.electricityUsageTotalPreHPAnnualKwHr).toEqual(
      977718.7200678927
    )
    expect(result.electricityCostTotalPreHPAnnualDollars).toEqual(
      2751395.947748578
    )
    expect(result.gasUsageTotalPreHPAnnualTherms).toEqual(9021387.751642887)
    expect(result.gasCostTotalPreHPAnnualDollars).toEqual(4326671.024973701)
    expect(result.gasUsageWaterHeaterAnnualTherms).toEqual(7132663.906311782)
    expect(result.gasUsageOtherAnnualTherms).toEqual(8064528.913355921)
    expect(result.furnaceEfficiencyPercent).toEqual(4444036.652517893)
    expect(result.heatPumpCOP).toEqual(24512.869238595413)
  })

  scenario(
    'updates a heatPumpConversion',
    async (scenario: StandardScenario) => {
      const original = (await heatPumpConversion({
        id: scenario.heatPumpConversion.one.id,
      })) as HeatPumpConversion
      const result = await updateHeatPumpConversion({
        id: original.id,
        input: { authorName: 'String2' },
      })

      expect(result.authorName).toEqual('String2')
    }
  )

  scenario(
    'deletes a heatPumpConversion',
    async (scenario: StandardScenario) => {
      const original = (await deleteHeatPumpConversion({
        id: scenario.heatPumpConversion.one.id,
      })) as HeatPumpConversion
      const result = await heatPumpConversion({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
