import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditHeatPumpConversionById,
  UpdateHeatPumpConversionInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

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

const HeatPumpConversionForm = (props: HeatPumpConversionFormProps) => {
  const onSubmit = (data: FormHeatPumpConversion) => {
    props.onSave(data, props?.heatPumpConversion?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormHeatPumpConversion> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="authorName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author name
        </Label>

        <TextField
          name="authorName"
          defaultValue={props.heatPumpConversion?.authorName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="authorName" className="rw-field-error" />

        <Label
          name="authorUserId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author user id
        </Label>

        <TextField
          name="authorUserId"
          defaultValue={props.heatPumpConversion?.authorUserId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="authorUserId" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.heatPumpConversion?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.heatPumpConversion?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="commentary"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Commentary
        </Label>

        <TextField
          name="commentary"
          defaultValue={props.heatPumpConversion?.commentary}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="commentary" className="rw-field-error" />

        <Label
          name="electricityUsageTotalPreHPAnnualKwHr"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Electricity usage total pre hp annual kw hr
        </Label>

        <TextField
          name="electricityUsageTotalPreHPAnnualKwHr"
          defaultValue={
            props.heatPumpConversion?.electricityUsageTotalPreHPAnnualKwHr
          }
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError
          name="electricityUsageTotalPreHPAnnualKwHr"
          className="rw-field-error"
        />

        <Label
          name="electricityCostTotalPreHPAnnualDollars"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Electricity cost total pre hp annual dollars
        </Label>

        <TextField
          name="electricityCostTotalPreHPAnnualDollars"
          defaultValue={
            props.heatPumpConversion?.electricityCostTotalPreHPAnnualDollars
          }
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError
          name="electricityCostTotalPreHPAnnualDollars"
          className="rw-field-error"
        />

        <Label
          name="gasUsageTotalPreHPAnnualTherms"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gas usage total pre hp annual therms
        </Label>

        <TextField
          name="gasUsageTotalPreHPAnnualTherms"
          defaultValue={
            props.heatPumpConversion?.gasUsageTotalPreHPAnnualTherms
          }
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError
          name="gasUsageTotalPreHPAnnualTherms"
          className="rw-field-error"
        />

        <Label
          name="gasCostTotalPreHPAnnualDollars"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gas cost total pre hp annual dollars
        </Label>

        <TextField
          name="gasCostTotalPreHPAnnualDollars"
          defaultValue={
            props.heatPumpConversion?.gasCostTotalPreHPAnnualDollars
          }
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError
          name="gasCostTotalPreHPAnnualDollars"
          className="rw-field-error"
        />

        <Label
          name="gasUsageWaterHeaterAnnualTherms"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gas usage water heater annual therms
        </Label>

        <TextField
          name="gasUsageWaterHeaterAnnualTherms"
          defaultValue={
            props.heatPumpConversion?.gasUsageWaterHeaterAnnualTherms
          }
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError
          name="gasUsageWaterHeaterAnnualTherms"
          className="rw-field-error"
        />

        <Label
          name="gasUsageOtherAnnualTherms"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gas usage other annual therms
        </Label>

        <TextField
          name="gasUsageOtherAnnualTherms"
          defaultValue={props.heatPumpConversion?.gasUsageOtherAnnualTherms}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError
          name="gasUsageOtherAnnualTherms"
          className="rw-field-error"
        />

        <Label
          name="furnaceEfficiencyPercent"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Furnace efficiency percent
        </Label>

        <TextField
          name="furnaceEfficiencyPercent"
          defaultValue={props.heatPumpConversion?.furnaceEfficiencyPercent}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError
          name="furnaceEfficiencyPercent"
          className="rw-field-error"
        />

        <Label
          name="heatPumpCOP"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Heat pump cop
        </Label>

        <TextField
          name="heatPumpCOP"
          defaultValue={props.heatPumpConversion?.heatPumpCOP}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="heatPumpCOP" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default HeatPumpConversionForm
