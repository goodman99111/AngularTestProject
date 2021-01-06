import { getPopularTagsResponceInterface } from './getPopularTagsREsponce.interface'

export interface popularTagsStateInterface {
  isLoading: boolean
  data: getPopularTagsResponceInterface | null
  error: string | null
}
