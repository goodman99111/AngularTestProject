import { BackandErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

export interface SettingsStateInterface {
  isSubmitting: boolean
  validationsError: BackandErrorsInterface | null
}
