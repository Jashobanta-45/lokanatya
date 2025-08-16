import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-account.html',
  styleUrls: ['./my-account.css']
})
export class MyAccount implements OnInit {
  activeTab: 'profile' | 'orders' | 'settings' = 'profile';
  mobileMenuOpen = false;
  fullName: string = '';
  phone: string = '';
  disableFullName = false;   // 🔹 control only Full Name

  ngOnInit() {
    // Load saved phone from localStorage
    const savedPhone = localStorage.getItem('userPhone');
    if (savedPhone) {
      this.phone = savedPhone;
    }
  }

  setTab(tab: 'profile' | 'orders' | 'settings') {
    this.activeTab = tab;
  }

  submitForm() {
    if (this.fullName.trim()) {
      this.disableFullName = true;   // 🔹 only disable fullName after submit
    }
  }
}
