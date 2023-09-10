import type { Prisma, HeatPumpConversion } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.HeatPumpConversionCreateArgs>({
  heatPumpConversion: {
    one: {
      data: {
        authorName: 'String',
        authorUserId: 'String',
        title: 'String',
        electricityUsageTotalPreHPAnnualKwHr: 2841274.0887904777,
        electricityCostTotalPreHPAnnualDollars: 5951435.568146739,
        gasUsageTotalPreHPAnnualTherms: 8857612.114091039,
        gasCostTotalPreHPAnnualDollars: 3619825.1612487687,
        gasUsageWaterHeaterAnnualTherms: 5910058.288706876,
        gasUsageOtherAnnualTherms: 2117143.8735357183,
        furnaceEfficiencyPercent: 2193797.5303804944,
        heatPumpCOP: 9156277.82040091,
      },
    },
    two: {
      data: {
        authorName: 'String',
        authorUserId: 'String',
        title: 'String',
        electricityUsageTotalPreHPAnnualKwHr: 1460552.948724323,
        electricityCostTotalPreHPAnnualDollars: 8576864.78701833,
        gasUsageTotalPreHPAnnualTherms: 6549355.624789123,
        gasCostTotalPreHPAnnualDollars: 6023382.489549898,
        gasUsageWaterHeaterAnnualTherms: 2344731.514914642,
        gasUsageOtherAnnualTherms: 4861228.047868924,
        furnaceEfficiencyPercent: 3880427.666773145,
        heatPumpCOP: 6598556.9656574335,
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  HeatPumpConversion,
  'heatPumpConversion'
>
