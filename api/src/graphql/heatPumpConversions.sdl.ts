export const schema = gql`
  type HeatPumpConversion {
    id: Int!
    authorName: String!
    authorUserId: String!
    title: String!
    description: String
    commentary: String
    electricityUsageTotalPreHPAnnualKwHr: Float!
    electricityCostTotalPreHPAnnualDollars: Float!
    gasUsageTotalPreHPAnnualTherms: Float!
    gasCostTotalPreHPAnnualDollars: Float!
    gasUsageWaterHeaterAnnualTherms: Float!
    gasUsageOtherAnnualTherms: Float!
    furnaceEfficiencyPercent: Float!
    heatPumpCOP: Float!
    createdAt: DateTime!
  }

  type Query {
    heatPumpConversions: [HeatPumpConversion!]! @skipAuth
    heatPumpConversion(id: Int!): HeatPumpConversion @skipAuth
  }

  input CreateHeatPumpConversionInput {
    authorName: String!
    authorUserId: String!
    title: String!
    description: String
    commentary: String
    electricityUsageTotalPreHPAnnualKwHr: Float!
    electricityCostTotalPreHPAnnualDollars: Float!
    gasUsageTotalPreHPAnnualTherms: Float!
    gasCostTotalPreHPAnnualDollars: Float!
    gasUsageWaterHeaterAnnualTherms: Float!
    gasUsageOtherAnnualTherms: Float!
    furnaceEfficiencyPercent: Float!
    heatPumpCOP: Float!
  }

  input UpdateHeatPumpConversionInput {
    authorName: String
    authorUserId: String
    title: String
    description: String
    commentary: String
    electricityUsageTotalPreHPAnnualKwHr: Float
    electricityCostTotalPreHPAnnualDollars: Float
    gasUsageTotalPreHPAnnualTherms: Float
    gasCostTotalPreHPAnnualDollars: Float
    gasUsageWaterHeaterAnnualTherms: Float
    gasUsageOtherAnnualTherms: Float
    furnaceEfficiencyPercent: Float
    heatPumpCOP: Float
  }

  type Mutation {
    createHeatPumpConversion(
      input: CreateHeatPumpConversionInput!
    ): HeatPumpConversion! @skipAuth
    updateHeatPumpConversion(
      id: Int!
      input: UpdateHeatPumpConversionInput!
    ): HeatPumpConversion! @skipAuth
    deleteHeatPumpConversion(id: Int!): HeatPumpConversion! @skipAuth
  }
`
