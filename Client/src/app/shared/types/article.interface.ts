import { PopularTagType } from './populatTagsType.type'
import { ProfileInterface } from './profile.interface'

export interface ArticleInterface {
  title: string
  slug: string
  body: string
  createdAt: string
  updatedAt: string
  tagList: PopularTagType[]
  description: string
  author: ProfileInterface
  favorited: boolean
  favoritesCount: number
}
