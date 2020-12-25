import { Component, Input, OnInit } from '@angular/core'
import { BackandErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['.//backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackandErrorsInterface

  errorMessages: string[]

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name] + ', '

        return `${name} ${messages}`
      }
    )
  }
}
