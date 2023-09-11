import {
  Form,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditHeatPumpConversionById,
  UpdateHeatPumpConversionInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { ResponsiveBar } from '@nivo/bar'
import { useState } from 'react'
import FormNumberSlider from 'src/components/FormNumberSlider/FormNumberSlider'

type FormHeatPumpConversion = NonNullable<
  EditHeatPumpConversionById['heatPumpConversion']
>

interface HeatPumpConversionFormProps {
  heatPumpConversion?: EditHeatPumpConversionById['heatPumpConversion']
  onSave: (
    data: UpdateHeatPumpConversionInput,
    id?: FormHeatPumpConversion['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const DEFAULT_VALUE_electricityUsageTotalPreHPAnnualKwHr = 5950
const DEFAULT_VALUE_electricityCostTotalPreHPAnnualDollars = 956
const DEFAULT_VALUE_gasUsageTotalPreHPAnnualTherms = 966
const DEFAULT_VALUE_gasCostTotalPreHPAnnualDollars = 1416
const DEFAULT_VALUE_furnaceEfficiencyPercent = 80
const DEFAULT_VALUE_heatPumpCOP = 2.7
const COST_ASSUMPTION_PERCENTAGE_OF_ELECTRICITY_BILL_FOR_FURNACE_BLOWER = 3
const COST_ASSUMPTION_PERCENTAGE_OF_GAS_USAGE_FOR_WATER_HEATER = 10
const COST_ASSUMPTION_PERCENTAGE_OF_GAS_USAGE_FOR_OTHER_USES = 5

const HeatPumpConversionForm = (props: HeatPumpConversionFormProps) => {
  const [authorName, setAuthorName] = useState(props.heatPumpConversion?.authorName || "")
  const [title, setTitle] = useState(props.heatPumpConversion?.title || "")
  const [description, setDescription] = useState(props.heatPumpConversion?.description || "")
  const [commentary, setCommentary] = useState(props.heatPumpConversion?.commentary || "")

  const [electricityUsageTotalPreHPAnnualKwHr, setElectricityUsageTotalPreHPAnnualKwHr] =
    useState(props.heatPumpConversion?.electricityUsageTotalPreHPAnnualKwHr !== undefined ? props.heatPumpConversion?.electricityUsageTotalPreHPAnnualKwHr : DEFAULT_VALUE_electricityUsageTotalPreHPAnnualKwHr)
  const [electricityCostTotalPreHPAnnualDollars, setElectricityCostTotalPreHPAnnualDollars] =
    useState(props.heatPumpConversion?.electricityCostTotalPreHPAnnualDollars !== undefined ? props.heatPumpConversion?.electricityCostTotalPreHPAnnualDollars : DEFAULT_VALUE_electricityCostTotalPreHPAnnualDollars)
  const [gasUsageTotalPreHPAnnualTherms, setGasUsageTotalPreHPAnnualTherms] =
    useState(props.heatPumpConversion?.gasUsageTotalPreHPAnnualTherms !== undefined ? props.heatPumpConversion?.gasUsageTotalPreHPAnnualTherms : DEFAULT_VALUE_gasUsageTotalPreHPAnnualTherms)
  const [gasCostTotalPreHPAnnualDollars, setGasCostTotalPreHPAnnualDollars] =
    useState(props.heatPumpConversion?.gasCostTotalPreHPAnnualDollars !== undefined ? props.heatPumpConversion?.gasCostTotalPreHPAnnualDollars : DEFAULT_VALUE_gasCostTotalPreHPAnnualDollars)
  const [gasUsageWaterHeaterAnnualTherms, setGasUsageWaterHeaterAnnualTherms] =
    useState(gasUsageTotalPreHPAnnualTherms * (COST_ASSUMPTION_PERCENTAGE_OF_GAS_USAGE_FOR_WATER_HEATER / 100))
  const [gasUsageOtherAnnualTherms, setGasUsageOtherAnnualTherms] =
    useState(gasUsageTotalPreHPAnnualTherms * (COST_ASSUMPTION_PERCENTAGE_OF_GAS_USAGE_FOR_OTHER_USES / 100))
  const [furnaceEfficiencyPercent, setFurnaceEfficiencyPercent] =
    useState(props.heatPumpConversion?.furnaceEfficiencyPercent !== undefined ? props.heatPumpConversion?.furnaceEfficiencyPercent : DEFAULT_VALUE_furnaceEfficiencyPercent)
  const [heatPumpCOP, setHeatPumpCOP] =
    useState(props.heatPumpConversion?.heatPumpCOP !== undefined ? props.heatPumpConversion?.heatPumpCOP : DEFAULT_VALUE_heatPumpCOP)

  const electricityCostPerKwHr =
    electricityCostTotalPreHPAnnualDollars / electricityUsageTotalPreHPAnnualKwHr
  const electricityCostFurnaceBlowerAnnualDollars =
    electricityCostTotalPreHPAnnualDollars *
    (COST_ASSUMPTION_PERCENTAGE_OF_ELECTRICITY_BILL_FOR_FURNACE_BLOWER / 100)
  const naturalGasCostPerTherm =
    gasCostTotalPreHPAnnualDollars / gasUsageTotalPreHPAnnualTherms
  const naturalGasUsageHomeHeatingPreHPAnnualTherms =
    gasUsageTotalPreHPAnnualTherms -
    gasUsageWaterHeaterAnnualTherms -
    gasUsageOtherAnnualTherms
  const naturalGasUsageAppliedHomeHeatingPreHPAnnualTherms =
    naturalGasUsageHomeHeatingPreHPAnnualTherms *
    (furnaceEfficiencyPercent / 100)
  const bTUPerTherm = 100000
  const heatDeliveredToHomeAnnualBTU =
    naturalGasUsageAppliedHomeHeatingPreHPAnnualTherms * bTUPerTherm
  const kwHrPerTherm = 29.3
  const heatDeliveredToHomeAnnualKwHr =
    naturalGasUsageAppliedHomeHeatingPreHPAnnualTherms * kwHrPerTherm
  const electricityUsageHomeHeatingPostHPAnnualKwHr =
    heatDeliveredToHomeAnnualKwHr / heatPumpCOP
  const electricityCostHomeHeatingPostHPAnnualDollars =
    electricityUsageHomeHeatingPostHPAnnualKwHr * electricityCostPerKwHr
  const electricityCostTotalPostHPAnnualDollars =
    electricityCostTotalPreHPAnnualDollars -
    electricityCostFurnaceBlowerAnnualDollars +
    electricityCostHomeHeatingPostHPAnnualDollars
  const naturalGasUsageTotalPostHPAnnualTherms =
    gasUsageTotalPreHPAnnualTherms - naturalGasUsageHomeHeatingPreHPAnnualTherms
  const naturalGasCostTotalPostHPAnnualDollars =
    naturalGasUsageTotalPostHPAnnualTherms * naturalGasCostPerTherm

  const onSubmit = () => {
    // props.onSave(data, props?.heatPumpConversion?.id)
    props.onSave({
      authorName,
      authorUserId: 'test author user id',
      title,
      description,
      commentary,
      electricityUsageTotalPreHPAnnualKwHr,
      electricityCostTotalPreHPAnnualDollars,
      gasUsageTotalPreHPAnnualTherms,
      gasCostTotalPreHPAnnualDollars,
      gasUsageWaterHeaterAnnualTherms,
      gasUsageOtherAnnualTherms,
      furnaceEfficiencyPercent,
      heatPumpCOP,
  },
    props?.heatPumpConversion?.id)
  }

  return (
    <Stack
      // h={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      alignContent={'center'}
    >

      <Flex
        p={8}
        flex={1}
        justify={'center'}
        border="2px"
        borderColor={'white'}
      >
    <Form<FormHeatPumpConversion> onSubmit={onSubmit} error={props.error}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
              {title}
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              {""}
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            {description}

          </Text>
          <Stack direction={'column'} spacing={4}>
{/*
      <FormControl>
        <FormLabel>Author Name</FormLabel>
        <Input
          w={'100%' }
          name="authorName"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          w={'100%' }
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input
          w={'100%' }
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Commentary</FormLabel>
        <Input
          w={'100%' }
          name="commentary"
          value={commentary}
          onChange={(e) => setCommentary(e.target.value)}
        />
      </FormControl> */}

      <FormNumberSlider descriptiveName='Annual Electricity Usage (kw-hr / year)' formItemName='electricityUsageTotalPreHPAnnualKwHr' formItemValue={electricityUsageTotalPreHPAnnualKwHr} handleOnChange={setElectricityUsageTotalPreHPAnnualKwHr} maxValue={20000} minValue={100} />

      <FormNumberSlider descriptiveName='Annual Electricity Cost ($ / year' formItemName='electricityCostTotalPreHPAnnualDollars' formItemValue={electricityCostTotalPreHPAnnualDollars} handleOnChange={setElectricityCostTotalPreHPAnnualDollars} minValue={100} maxValue={20000} />

      <FormNumberSlider descriptiveName='Annual Gas Usage (therms / year)' formItemName='gasUsageTotalPreHPAnnualTherms' formItemValue={gasUsageTotalPreHPAnnualTherms} handleOnChange={setGasUsageTotalPreHPAnnualTherms} />

      <FormNumberSlider descriptiveName='Annual Gas Cost ($ / year)' formItemName='gasCostTotalPreHPAnnualDollars' formItemValue={gasCostTotalPreHPAnnualDollars} handleOnChange={setGasCostTotalPreHPAnnualDollars} />

      <FormNumberSlider descriptiveName='Annual Gas Usage for Water Heater (therms / year)' formItemName='gasUsageWaterHeaterAnnualTherms' formItemValue={gasUsageWaterHeaterAnnualTherms} handleOnChange={setGasUsageWaterHeaterAnnualTherms} minValue={0} maxValue={20000} />

      <FormNumberSlider descriptiveName='Annual Gas Usage for Other (therms / year)' formItemName='gasUsageOtherAnnualTherms' formItemValue={gasUsageOtherAnnualTherms} handleOnChange={setGasUsageOtherAnnualTherms} minValue={0} maxValue={20000}/>

      <FormNumberSlider descriptiveName='Furnace Efficiency (%)' formItemName='furnaceEfficiencyPercent' formItemValue={furnaceEfficiencyPercent} handleOnChange={setFurnaceEfficiencyPercent} minValue={50} maxValue={100}/>

      <FormNumberSlider descriptiveName='Heat Pump COP' formItemName='heatPumpCOP' formItemValue={heatPumpCOP} handleOnChange={setHeatPumpCOP} minValue={1} maxValue={5}/>

          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </Stack>
      </Stack>
      </Form>
      </Flex>
      <Flex
        flex={1}
        border="2px"
        borderColor={'gray.100'}
        // minHeight={{ base: '50vh', md: '100%' }}
        height={'50vh'}
      >
        <Box
          minWidth={'100%'}
          // minHeight={'100%'}
          // minHeight={{ base: '200px', md: '100%' }}
          border="2px"
          borderColor={'white'}
        >
          <ResponsiveBar
            data={[
              {
                heaterType: 'Natural Gas Furnace',
                annualNaturalGasCost: Math.round(
                  naturalGasUsageHomeHeatingPreHPAnnualTherms *
                    naturalGasCostPerTherm +
                    electricityCostFurnaceBlowerAnnualDollars
                ),
              },
              {
                heaterType: 'Heat Pump',
                annualElectricityCost: Math.round(
                  electricityCostHomeHeatingPostHPAnnualDollars
                ),
              },
            ]}
            theme={{ fontSize: 20 }}
            indexBy="heaterType"
            keys={['annualNaturalGasCost', 'annualElectricityCost']}
            margin={{ top: 90, right: 0, bottom: 90, left: 80 }}
            padding={0.4}
            valueScale={{ type: 'linear' }}
            // colors="#3182CE"
            animate={true}
            enableLabel={true}
            axisTop={null}
            axisRight={null}
            // title={'Annual Cost Comparison'}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              // legend: 'Annual Cost ($/year)',
              legendPosition: 'middle',
              legendOffset: -50,
            }}
            borderRadius={8}
          />
        </Box>
      </Flex>

    </Stack>
  )
}

export default HeatPumpConversionForm
