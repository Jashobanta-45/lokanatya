import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  isMenuOpen = false;
  isMainMenuOpen = false;
  isTodayMenuOpen = false;
  isUpcomingMenuOpen = false;

  // Location popup
  showLocationPopup = false;  // initially hidden
  currentLocation: string = 'Unknown';
  latitude: number | null = null;
  longitude: number | null = null;

  constructor() {}

  toggleUserMenu() {
  this.isMenuOpen = !this.isMenuOpen;

  // Close main menu if user menu opens
  if (this.isMenuOpen) {
    this.isMainMenuOpen = false;
  }
}

toggleMainMenu() {
  this.isMainMenuOpen = !this.isMainMenuOpen;

  // Close user menu if main menu opens
  if (this.isMainMenuOpen) {
    this.isMenuOpen = false;
  }
}

  // Show location permission popup
  openLocationPopup() {
    this.showLocationPopup = true;
  }

  // User clicks "Allow"
  allowLocation() {
    this.showLocationPopup = false;
    this.getCurrentLocation();
  }

  // User clicks "Deny"
  denyLocation() {
    this.showLocationPopup = false;
    this.currentLocation = 'Location denied';
  }

  // Get user's coordinates
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log('Coords:', this.latitude, this.longitude);
          this.reverseGeocode(this.latitude, this.longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          switch (error.code) {
            case error.PERMISSION_DENIED:
              this.currentLocation = 'Location denied';
              break;
            case error.POSITION_UNAVAILABLE:
              this.currentLocation = 'Position unavailable';
              break;
            case error.TIMEOUT:
              this.currentLocation = 'Location request timeout';
              break;
            default:
              this.currentLocation = 'Location unavailable';
          }
        }
      );
    } else {
      this.currentLocation = 'Location not supported';
    }
  }

  // Reverse geocode using Nominatim to get district only
  async reverseGeocode(lat: number, lng: number) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
        {
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'AngularApp/1.0 (your-email@example.com)'
          }
        }
      );

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      console.log('Reverse geocode data:', data);

      if (data && data.address) {
        // Extract district only
        this.currentLocation = data.address.state_district || 'Unknown district';
      } else {
        this.currentLocation = `Lat: ${lat.toFixed(2)}, Lng: ${lng.toFixed(2)}`;
      }

    } catch (err) {
      console.error('Reverse geocoding error:', err);
      this.currentLocation = `Lat: ${lat.toFixed(2)}, Lng: ${lng.toFixed(2)}`;
    }
  }
}
