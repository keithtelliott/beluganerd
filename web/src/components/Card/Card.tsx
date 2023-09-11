import { ReactElement } from 'react'

import {
  Box,
  Center,
  Heading,
  Icon,
  Text,
  Stack,
  Avatar,
  // Image,
  useColorModeValue,
  Button,
  Spacer,
  Link,
} from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'
// import { GiHeatHaze } from 'react-icons/gi'

interface CardProps {
  icon: IconType
  // icon: ReactElement
  category: string
  title: string
  description: string
  author: string
  avatarUrl: string
  date: string
  buttonText?: string
  hrefToAnalysis: string
}

export default function Card({
  icon,
  category,
  title,
  description,
  author,
  avatarUrl,
  date,
  buttonText = 'Review',
  hrefToAnalysis
}: CardProps) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Center h={'210px'}>
            <Icon as={icon} boxSize={20} />
          </Center>
          {/* <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            alt="Example"
          /> */}
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {category}
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {title}
          </Heading>
          <Text color={'gray.500'}>{description}</Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={avatarUrl} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{author}</Text>
            <Text color={'gray.500'}>{date}</Text>
          </Stack>
          <Spacer />
          <Link href={hrefToAnalysis}>Review</Link>
          {/* <Button
            colorScheme={'green'}
            bg={'green.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'green.500',
            }}
            >
            {buttonText}
          </Button> */}
            {/* </Link> */}
        </Stack>
      </Box>
    </Center>
  )
}
