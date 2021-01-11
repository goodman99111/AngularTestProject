import { PopularTagType } from 'src/app/shared/types/populatTagsType.type'
import { getPopularTagsResponceInterface } from './getPopularTagsREsponce.interface'

export interface popularTagsStateInterface {
  isLoading: boolean
  data: PopularTagType[] | null
  error: string | null
}
