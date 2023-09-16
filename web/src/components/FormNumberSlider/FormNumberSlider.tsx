import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react'

const FormNumberSlider = ({
  descriptiveName,
  formItemName,
  formItemValue,
  handleOnChange,
  maxValue = 20000,
  minValue = 100,
}: {
  descriptiveName: string
  formItemName: string
  formItemValue: number
  handleOnChange: any
  maxValue?: number
  minValue?: number
}) => {
  return (
    <FormControl>
      <FormLabel>{descriptiveName}</FormLabel>
      <HStack>
        <Input
          w={{ base: '30%', md: '20%' }}
          name={formItemName}
          value={formItemValue}
          onChange={(e) => handleOnChange(+e.target.value)}
        />
        <Slider
          aria-label="slider-gas-usage"
          value={formItemValue}
          max={maxValue}
          min={minValue}
          onChange={(v) => handleOnChange(+v)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </HStack>
    </FormControl>
  )
}

export default FormNumberSlider
