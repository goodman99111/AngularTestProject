import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { environment } from 'src/environments/environment'
import { AuthResponceInterface } from 'src/app/auth/types/authResponce.interface'
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.authUrl + '/users'

    return this.http
      .post<AuthResponceInterface>(url, data)
      .pipe(map((responce: AuthResponceInterface) => responce.user))
  }
}
