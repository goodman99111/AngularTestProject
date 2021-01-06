import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { getPopularTagsResponceInterface } from '../types/getPopularTagsREsponce.interface'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(url: string): Observable<getPopularTagsResponceInterface> {
    const apiurl = url + '/tags'

    return this.http.get<getPopularTagsResponceInterface>(apiurl)
  }
}
