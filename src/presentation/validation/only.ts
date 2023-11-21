import { FieldNotNumberError, FieldNotStringError } from '@/presentation/errors'
import { type Validator } from '@/presentation/validation'

export class OnlyNumber implements Validator {
  constructor(
    readonly value: any,
    readonly fieldName: string
  ) { }

  validate(): Error | undefined {
    if (this.value) {
      const regex = /^\d+$/
      if (!regex.test(this.value)) {
        return new FieldNotNumberError(this.fieldName)
      }
    }
  }
}

export class OnlyLetters implements Validator {
  constructor(
    readonly value: any,
    readonly fieldName: string
  ) { }

  validate(): Error | undefined {
    if (this.value) {
      const regex = /^[a-zA-Z]+$/
      if (!regex.test(this.value)) {
        return new FieldNotStringError(this.fieldName)
      }
    }
  }
}
