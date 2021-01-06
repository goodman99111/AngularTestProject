import { AuthStateInterface } from 'src/app/auth/types/authState.interface'
import { FeedStateInterface } from '../modules/feed/types/feedState.interface'
import { popularTagsStateInterface } from '../modules/popularTagsList/types/popularTagsState.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
  popularTags: popularTagsStateInterface
}
