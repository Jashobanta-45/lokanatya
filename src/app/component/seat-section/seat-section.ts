import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Seat {
  id: string;
  status: 'available' | 'booked' | 'selfBooked';
}


@Component({
  selector: 'app-seat-section',
  imports: [CommonModule],
  templateUrl: './seat-section.html',
  styleUrl: './seat-section.css'
})
export class SeatSection {
  rows = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'];
  seatsPerRow = 20; 
  seats: Seat[][] = [];

  constructor() {
    this.generateSeats();
  }

  generateSeats() {
    this.seats = this.rows.map(row => {
      return Array.from({ length: this.seatsPerRow }, (_, i) => {
        const seatId = `${row}-${i + 1}`;

        // Example booked seats
        const isBooked = Math.random() < 0.2; // 20% booked

        return {
          id: seatId,
          status: isBooked ? 'booked' : 'available'
        };
      });
    });
  }

  toggleSeat(rowIndex: number, seatIndex: number) {
    const seat = this.seats[rowIndex][seatIndex];
    if (seat.status === 'booked') return; // Can't change booked seats

    seat.status = seat.status === 'selfBooked' ? 'available' : 'selfBooked';
  }

  getSeatClass(seat: Seat) {
    switch (seat.status) {
      case 'booked':
        return 'bg-gray-500';
      case 'selfBooked':
        return 'bg-green-600';
      default:
        return 'bg-blue-600';
    }
  }
}
