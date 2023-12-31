import { FieldNotBooleanError, FieldNotNumberError, FieldNotStringError, RequiredFieldError } from '@/presentation/errors'
import { type Validator } from '@/presentation/validation'

export class Required implements Validator {
  constructor(
    readonly value: any,
    readonly fieldName: string
  ) { }

  validate(): Error | undefined {
    if (this.value === null || this.value === undefined || this.value === '') {
      return new RequiredFieldError(this.fieldName)
    }
  }
}

export class RequiredString extends Required {
  constructor(
    readonly value: any,
    readonly fieldName: string
  ) {
    super(value, fieldName)
  }

  validate(): Error | undefined {
    if (this.value) {
      if (typeof this.value !== 'string') {
        return new FieldNotStringError(this.fieldName)
      }
    }
  }
}

export class RequiredNumber extends Required {
  constructor(
    readonly value: any,
    readonly fieldName: string
  ) {
    super(value, fieldName)
  }

  validate(): Error | undefined {
    if (this.value) {
      if (typeof this.value !== 'number') {
        return new FieldNotNumberError(this.fieldName)
      }
    }
  }
}

export class RequiredBoolean implements Validator {
  constructor(
    readonly value: any,
    readonly fieldName: string
  ) { }

  validate(): Error | undefined {
    if (this.value) {
      if (typeof this.value !== 'boolean') {
        return new FieldNotBooleanError(this.fieldName)
      }
    }
  }
}
