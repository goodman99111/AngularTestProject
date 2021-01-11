import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { PopularTagType } from 'src/app/shared/types/populatTagsType.type'
import { environment } from 'src/environments/environment'
import { getPopularTagsResponceInterface } from '../types/getPopularTagsREsponce.interface'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const apiurl = environment.authUrl + '/tags'

    return this.http.get<getPopularTagsResponceInterface>(apiurl).pipe(
      map((responce: getPopularTagsResponceInterface) => {
        return responce.tags
      })
    )
  }
}
