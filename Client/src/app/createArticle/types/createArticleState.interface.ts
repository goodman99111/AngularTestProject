import { BackandErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

export interface CreateArticleStateInterface {
  isSubmitting: boolean
  validationErrors: BackandErrorsInterface | null
}
