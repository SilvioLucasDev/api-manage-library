import { InvalidDateFormatError } from '@/presentation/errors'
import { type Validator } from '@/presentation/validation'

export class Date implements Validator {
  constructor(
    readonly value: any,
    readonly fieldName: string
  ) { }

  validate(): Error | undefined {
    const regex = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/

    if (!regex.test(this.value)) {
      return new InvalidDateFormatError(this.fieldName)
    }
  }
}
