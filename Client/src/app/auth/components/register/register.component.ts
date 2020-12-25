import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import { BackandErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { registerAction } from '../../store/actions/register.action'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackandErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: '',
      email: '',
      password: '',
    })

    this.initializeValues()
  }

  onSubmit(): void {
    console.log(this.form.valid)
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({ request }))
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }
}
