import { ReactElement } from 'react'

import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'

interface FeatureProps {
  title: string
  text: string
  heading: ReactElement
}

const Feature = ({ title, text, heading }: FeatureProps) => {
  return (
    <Stack align={'center'}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.400'}
        mb={1}
      >
        {heading}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'} align={'center'}>
        {text}
      </Text>
    </Stack>
  )
}

export default function SimpleThreeColumns() {
  return (
    <Stack
      as={Box}
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
      // bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
        lineHeight={'110%'}
      >
        {'Getting started '}
        <Text as={'span'} color={'green.400'}>
          {'in three steps'}
        </Text>
      </Heading>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            heading={<Heading>1</Heading>}
            title={'Find a Calculator'}
            text={
              'No need to start from scratch. It is helpful to observe and learn from the experiences of community members that have shared details of their energy transition investments.'
            }
          />
          <Feature
            heading={<Heading>2</Heading>}
            title={'Personalize It'}
            text={'Your situation is unique. Fine-tuning inputs is easy.'}
          />
          <Feature
            heading={<Heading>3</Heading>}
            title={'Save & Share'}
            text={
              'Sign in, and then you can save your analysis, to share for future review. Also, share with friends and neighbors!'
            }
          />
        </SimpleGrid>
      </Box>
    </Stack>
  )
}
