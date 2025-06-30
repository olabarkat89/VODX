import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgOtpInputModule } from 'ng-otp-input';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgOtpInputModule,ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  showFormForgetPass: boolean = false;
  typeText: boolean = false
  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group(
      {
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }
  onOtpChange(event: any) { }
  changeType() {
    this.typeText = !this.typeText
  }
    passwordForm: FormGroup;

  

  passwordMatchValidator(form: FormGroup): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  Submit() {
    if (this.passwordForm.valid) {
      console.log('Passwords match:', this.passwordForm.value);
    }
  }

  Next(){
    this.showFormForgetPass = !this.showFormForgetPass
  }
}
