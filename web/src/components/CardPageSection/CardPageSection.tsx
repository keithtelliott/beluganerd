import { Box, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { FaSun } from 'react-icons/fa'
import { GiHeatHaze } from 'react-icons/gi'

import Card from '../Card/Card'

const CardPageSection = () => {
  return (
    <Stack
      as={Box}
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
    >
      <Heading
        id="section-calculator-cards"
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
        lineHeight={'110%'}
      >
        {'Browse BelugaPod '}
        <Text as={'span'} color={'green.400'}>
          {'Calculators...'}
        </Text>
      </Heading>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Card
            icon={GiHeatHaze}
            category="Home & Building Heating"
            title="Natural Gas Furnace vs Heat Pump"
            description={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum.`}
            author="Achim Rolle"
            avatarUrl="https://avatars0.githubusercontent.com/u/1164541?v=4"
            hrefToAnalysis='/heat-pump-conversions/1/edit'
            date="Sept. 5, 2023"
          />
          <Card
            icon={FaSun}
            category="Electricity Generation"
            title="Home or Building Solar Installation"
            description={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum.`}
            author="Keith Elliot"
            avatarUrl="https://avatars.githubusercontent.com/u/43206213?s=64&v=4"
            date="Sept. 5, 2023"
            hrefToAnalysis='/'
          />
          <Card
            icon={FaSun}
            category="Electricity Generation"
            title="Home or Building Solar Installation"
            description={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum.`}
            author="Keith Elliot"
            avatarUrl="https://avatars.githubusercontent.com/u/43206213?s=64&v=4"
            date="Sept. 5, 2023"
            hrefToAnalysis='/'
          />
        </SimpleGrid>
      </Box>
    </Stack>
  )
}

export default CardPageSection
