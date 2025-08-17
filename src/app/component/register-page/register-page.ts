
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from './register-service';

@Component({
  selector: 'app-register-page',
  imports: [CommonModule,
    FormsModule,ReactiveFormsModule
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})
export class RegisterPage  {
 loginForm: FormGroup;
  otpVisible = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth:Register
  ) {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      otp: ['']
    });
  }

  // Step 1 - Show OTP field
  requestOtp() {
    if (this.loginForm.get('phone')?.invalid) return;

    // only allow default phone
    if (this.loginForm.get('phone')?.value !== '1111111111') {
      alert('Use default phone number: 1111111111');
      return;
    }

    this.otpVisible = true;
    this.loginForm.get('otp')?.setValidators([Validators.required, Validators.minLength(5)]);
    this.loginForm.get('otp')?.updateValueAndValidity();
  }

  // Step 2 - Verify OTP
  onSubmit() {
    if (!this.otpVisible) {
      this.requestOtp();
      return;
    }

    const { phone, otp } = this.loginForm.value;

    if (phone === '1111111111' && otp === '12345') {
      // ✅ Login success
      alert('Login Success!');
      this.router.navigate(['/my-account']);
    } else {
      alert('Invalid phone or OTP. Default: 1111111111 / 12345');
    }
  }
  loginSuccess(userPhone: string) {
  // Save phone number to localStorage
  localStorage.setItem('userPhone', userPhone);
    this.auth.login('1111111111'); // default phone for now
  this.router.navigate(['/my-account']);

  // Redirect to My Account page
  this.router.navigate(['/my-account']);
    localStorage.setItem('isLoggedIn', 'true');

  // Navigate to account page (optional)
  this.router.navigate(['/my-account']);
}

}

