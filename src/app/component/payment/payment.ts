import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule here
  templateUrl: './payment.html'
})
export class Payment {
  paymentMethod = 'card';
  cardNumber = '';
  expiry = '';
  cvv = '';
  upiId = '';

  payNow() {
    alert(`Payment successful via ${this.paymentMethod.toUpperCase()}!`);
  }
}
