import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { environment } from 'src/environments/environment'
import { AuthResponceInterface } from 'src/app/auth/types/authResponce.interface'
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import { LoginRequestInterface } from '../types/loginRequest.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(responce: AuthResponceInterface): CurrentUserInterface {
    return responce.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.authUrl + '/users'

    return this.http
      .post<AuthResponceInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.authUrl + '/users/login'

    return this.http
      .post<AuthResponceInterface>(url, data)
      .pipe(map(this.getUser))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.authUrl + '/user'

    return this.http.get(url).pipe(map(this.getUser))
  }
}
