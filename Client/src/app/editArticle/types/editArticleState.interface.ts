import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { BackandErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

export interface EditArticleStateInterface {
  isSubmitting: boolean
  validationErrors: BackandErrorsInterface | null
  isLoading: boolean
  article: ArticleInterface | null
}
